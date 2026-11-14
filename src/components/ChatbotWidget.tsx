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

CRITICAL FORMATTING INSTRUCTIONS:
- ALWAYS respond in short, clear bullet points (•).
- Maximum 3 to 5 brief points.
- Keep each point 1 single easy-to-read line.
- Avoid long paragraphs, essays, or complex markdown tables.
- Keep tone friendly, direct, and professional.
- End with a single friendly line offering next steps (e.g., booking a free consultation or contacting on WhatsApp).
- Only answer based on Devmetasol and software/tech topics. For unrelated questions, politely redirect.

═══ COMPANY OVERVIEW ═══
• Full-service software development & digital agency founded in 2020.
• 15+ years combined team experience, 500+ projects delivered, 24+ active global clients.
• Office 1: LUMS Incubation Center, Lahore, Pakistan
• Office 2: Jumeirah Lake Towers, Dubai, UAE
• Global presence: New York, New Jersey, Toronto, Riyadh, and Lisbon.

═══ CORE SERVICES ═══
• Web Development (React, Next.js, Vue, Node.js, PHP/Laravel, WordPress, E-Commerce)
• Mobile App Development (iOS, Android, React Native, Flutter)
• Custom Software & Cloud Infrastructure (AWS, Azure, Google Cloud, Docker, Kubernetes)
• UI/UX & Product Design (Figma, Wireframing, Prototypes, Design Systems)
• Digital Marketing & SEO (Social Media, PPC, Content Marketing, Search Rankings)
• Staff Augmentation & Dedicated Teams (Vetted full-stack developers on demand)
• QA & 24/7 Support (Testing, Maintenance, Monitoring)

═══ PORTFOLIO HIGHLIGHTS ═══
• SkipAline — Real-time business communication app (React Native + AWS)
• PM ERP — Enterprise Resource Planning system (React + Python + Docker)
• Cyerdit Wallet — Secure multi-currency digital crypto wallet ($5M+ processed)
• MoneyClime — Automated business financial management platform
• Clubzy & Appselec — Mobile marketplaces & social platforms with 50K+ users
• Caribbean Airline Solutions — Large-scale flight booking & management system

═══ CONTACT & LINKS ═══
• Email: careers@devmetasol.com
• Phone: +92 330 4527519
• WhatsApp: +92 332 0409566 (https://wa.me/923320409566)
• Website: https://devmetasol.com
• Free Consultation: devmetasol.com/schedule-call
• Careers: devmetasol.com/about-us/careers

═══ HOW TO ANSWER COMMON QUESTIONS ═══
• Services question: List 3-4 key services in short bullets and ask which one they need.
• Pricing question: State that pricing depends on project scope, and offer a free consultation or quick estimate via WhatsApp.
• Contact/Location question: Provide the direct WhatsApp number, phone, careers@devmetasol.com, and both offices (LUMS Incubation Center, Lahore & Jumeirah Lake Towers, Dubai).
• Careers question: Mention open roles (Full-Stack Dev, UI/UX, DevOps, Marketing) and link to /about-us/careers.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Devmetasol's AI assistant. How can I help you today? Ask me about our services, team, or how we can build your next project!",
    },
  ]);
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
                  temperature: 0.7,
                  maxOutputTokens: 300,
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
          if (text) return text;
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
              temperature: 0.7,
              max_tokens: 300,
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
          if (content) return content;
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
            throw geminiError; // no fallback available
          }
        }
      } else {
        // No Gemini key — go straight to Groq
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
            "⚠️ Something went wrong. Please try again or reach us at careers@devmetasol.com or WhatsApp: +92 332 0409566.",
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
    "How can I contact you?",
    "Tell me about your team",
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          style={{ height: "480px" }}>
          
          {/* Header */}
          <div className="bg-[#1e17e4] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              <div className="w-8 h-8 bg-[#1e17e4] rounded-full flex items-center justify-center text-white font-bold text-sm">
                K
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight">Devmetasol AI</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-blue-100 text-xs">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 bg-[#1e17e4] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                    K
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#1e17e4] text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start gap-2">
                <div className="w-7 h-7 bg-[#1e17e4] rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                  K
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}

            {/* Quick replies (shown only on first message) */}
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => { setInput(qr); setTimeout(sendMessage, 0); }}
                    className="text-xs bg-white border border-[#1e17e4] text-[#1e17e4] hover:bg-[#1e17e4] hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* WhatsApp redirect strip */}
          <a
            href="https://wa.me/923320409566"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs text-center py-2 flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp instead
          </a>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-3 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e17e4] focus:border-transparent disabled:opacity-50 bg-gray-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 bg-[#1e17e4] hover:bg-[#1a14cc] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shrink-0"
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
          <div className="bg-white text-gray-800 text-sm px-3 py-2 rounded-xl shadow-lg border border-gray-200 max-w-[180px] text-center animate-bounce-once">
            💬 Chat with our AI!
            <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
          className="w-14 h-14 bg-[#1e17e4] hover:bg-[#1a14cc] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
          aria-label={isOpen ? "Close chat" : "Open AI chat"}
        >
          {/* Ping animation when closed */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
          )}

          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatbotWidget;

