// ChatbotWidget.tsx
import { useState, useRef, useEffect } from "react";

// --- AI Provider Config ---
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemma-4-26b-a4b-it";
const GEMINI_API_URL =
  import.meta.env.VITE_GEMINI_API_URL ||
  "https://generativelanguage.googleapis.com/v1beta";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || "openai/gpt-oss-120b";
const GROQ_API_URL =
  import.meta.env.VITE_GROQ_API_URL || "https://api.groq.com/openai/v1";

const SYSTEM_PROMPT = `You are the official AI assistant for Devmetasol (a software & digital agency).

CRITICAL INSTRUCTIONS FOR EVERY REPLY:
1. BE VERY SHORT, DIRECT & SPECIFIC:
   - Answer the exact question asked in 2 to 4 concise bullet points (•) OR 1–2 direct sentences.
   - Max 15 words per bullet point.
   - NO introductory filler ("Hello!", "Sure thing!", "Here is what you need"). Go straight to the answer.
   - NO essays, NO long paragraphs, NO markdown tables.
2. FORMATTING:
   - Always put each bullet point on its own new line.
3. CLOSING:
   - End with 1 short line offering quick action: e.g. "👉 WhatsApp us at +92 332 0409566 for a quick quote!"
4. SCOPE:
   - Only answer questions about Devmetasol and software/tech services. Politely decline off-topic requests in 1 line.

═══ DEVMETASOL FACTS ═══
• Core Services: Web Development (React, Next.js, Node), Mobile Apps (Flutter, iOS, Android), Custom Software & ERP, UI/UX (Figma), AI/ML, Cloud/DevOps (AWS/Azure), Digital Marketing & SEO.
• Dedicated Teams: Staff augmentation with vetted full-stack engineers and designers.
• Track Record: Founded 2020, 500+ projects completed, 24+ global enterprise clients.
• Offices:
  1. LUMS Incubation Center, Lahore, Pakistan
  2. Jumeirah Lake Towers, Dubai, UAE
• Contact:
  - WhatsApp: +92 332 0409566 (https://wa.me/923320409566)
  - Phone: +92 332 0409566
  - Email: careers@devmetasol.com
  - Site: devmetasol.com

═══ SAMPLE RESPONSES ═══
User: "What services do you offer?"
• Web & Mobile Apps (React, Next.js, Flutter, Node)
• Custom Enterprise Software & ERP Systems
• UI/UX Design & Prototyping
• Cloud (AWS/Azure), AI & Digital Marketing
👉 WhatsApp us at +92 332 0409566 to discuss your project!

User: "Where are your offices?"
• Office 1: LUMS Incubation Center, Lahore, Pakistan
• Office 2: Jumeirah Lake Towers, Dubai, UAE
👉 Reach us anytime on WhatsApp: +92 332 0409566

User: "How much does a project cost?"
• Costs depend on scope, features, and timeline.
• We offer fixed-price projects and monthly dedicated developer squads.
👉 WhatsApp us at +92 332 0409566 for a free instant estimate!`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "👋 Hi! I'm Devmetasol AI.\nAsk me anything about our services, pricing, tech stack, or team!",
  },
];

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Hide bubble hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setIsLoading(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  // Helper to render bold text inside message bubble
  const renderFormattedContent = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    if (!GEMINI_API_KEY && !GROQ_API_KEY) {
      setTimeout(() => {
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content:
              "⚠️ No AI API key configured. Please add `VITE_GEMINI_API_KEY` or `VITE_GROQ_API_KEY` to the `.env` file.",
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    // --- Helper: call Gemini API ---
    const callGemini = async (): Promise<string> => {
      const history = updatedMessages.slice(1).map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      const geminiModelsToTry = [
        GEMINI_MODEL,
        "gemma-4-26b-a4b-it",
      ];
      const uniqueGeminiModels = Array.from(new Set(geminiModelsToTry.filter(Boolean)));

      let lastError: Error | null = null;
      for (const modelName of uniqueGeminiModels) {
        try {
          const response = await fetch(
            `${GEMINI_API_URL}/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                system_instruction: {
                  parts: [{ text: SYSTEM_PROMPT }],
                },
                contents: history,
                generationConfig: {
                  temperature: 0.3,
                  maxOutputTokens: 200,
                },
              }),
            }
          );

          if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
              errorData?.error?.message || `Gemini API error (${modelName}): ${response.status}`
            );
          }

          const data = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text.trim();
        } catch (err: unknown) {
          lastError = err instanceof Error ? err : new Error(String(err));
          console.warn(`Gemini model ${modelName} failed:`, err);
        }
      }

      throw lastError || new Error("Failed to get response from Gemini.");
    };

    // --- Helper: call Groq API (OpenAI-compatible) ---
    const callGroq = async (): Promise<string> => {
      const chatMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...updatedMessages.slice(1).map((msg) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        })),
      ];

      const groqModelsToTry = [
        GROQ_MODEL,
        "openai/gpt-oss-120b",
        "openai/gpt-oss-20b",
        "qwen/qwen3.8-27b",
      ];
      const uniqueGroqModels = Array.from(new Set(groqModelsToTry.filter(Boolean)));

      let lastError: Error | null = null;
      for (const modelName of uniqueGroqModels) {
        try {
          const response = await fetch(`${GROQ_API_URL}/chat/completions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify({
              model: modelName,
              messages: chatMessages,
              temperature: 0.3,
              max_tokens: 200,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
              errorData?.error?.message || `Groq API error (${modelName}): ${response.status}`
            );
          }

          const data = await response.json();
          const content = data?.choices?.[0]?.message?.content;
          if (content) return content.trim();
        } catch (err: unknown) {
          lastError = err instanceof Error ? err : new Error(String(err));
          console.warn(`Groq model ${modelName} failed, trying next:`, err);
        }
      }

      throw lastError || new Error("Failed to get response from Groq.");
    };

    try {
      let aiText: string;

      // Try Gemini first, fall back to Groq
      if (GEMINI_API_KEY) {
        try {
          aiText = await callGemini();
        } catch (geminiError) {
          console.warn("Gemini failed, switching to Groq:", geminiError);
          if (GROQ_API_KEY) {
            aiText = await callGroq();
          } else {
            throw geminiError;
          }
        }
      } else {
        aiText = await callGroq();
      }

      setMessages([...updatedMessages, { role: "assistant", content: aiText }]);
    } catch (error: unknown) {
      console.error("AI API Error:", error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "⚠️ Something went wrong. Please reach us directly:\n• WhatsApp: +92 332 0409566\n• Email: careers@devmetasol.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "What services do you offer?",
    "Where are your offices?",
    "How can I get a quote?",
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="bg-[#0f223d] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Devmetasol AI</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-slate-300 text-xs">Online • Quick answers</p>
              </div>
            </div>

            {/* Clear / Refresh Chat Button */}
            <button
              onClick={handleClearChat}
              className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
              title="Clear & restart chat"
              aria-label="Clear chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
              title="Close chat"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 bg-[#0f223d] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    D
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed break-words whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm shadow-sm"
                      : "bg-white text-slate-800 shadow-sm border border-slate-200/80 rounded-bl-sm"
                  }`}
                >
                  {renderFormattedContent(msg.content)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start gap-2">
                <div className="w-7 h-7 bg-[#0f223d] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                  D
                </div>
                <div className="bg-white border border-slate-200 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}

            {/* Quick replies (shown only on initial message) */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-1">Quick Questions:</span>
                <div className="flex flex-wrap gap-1.5">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => {
                        setInput(qr);
                        setTimeout(sendMessage, 0);
                      }}
                      className="text-xs bg-white border border-blue-200 hover:border-blue-500 text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-all text-left shadow-2xs"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp redirect strip */}
          <a
            href="https://wa.me/923320409566"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold py-2.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-inner"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp instead</span>
          </a>

          {/* Input Area */}
          <div className="bg-white border-t border-slate-200 p-3 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 text-xs sm:text-sm border border-slate-300 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 bg-slate-50 text-slate-800 placeholder:text-slate-400"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shrink-0 shadow-sm"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bubble Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
        {/* Hint bubble */}
        {showBubble && !isOpen && (
          <div className="bg-white text-slate-800 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 max-w-[190px] text-center animate-bounce">
            💬 Have a question? Ask AI!
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowBubble(false);
          }}
          className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
          aria-label={isOpen ? "Close chat" : "Open AI chat"}
        >
          {/* Status indicator when closed */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
          )}

          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatbotWidget;
