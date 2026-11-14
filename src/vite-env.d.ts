/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 1. AI Chatbot APIs (Gemini primary, Groq fallback)
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_GEMINI_MODEL?: string;
  readonly VITE_GEMINI_API_URL?: string;
  readonly VITE_GROQ_API_KEY?: string;
  readonly VITE_GROQ_MODEL?: string;
  readonly VITE_GROQ_API_URL?: string;

  // 2. Backend / REST API
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_API_TIMEOUT?: string;

  // 3. Contact Form & Email Delivery APIs
  readonly VITE_CONTACT_API_URL?: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;

  // 4. Calendly & Meeting Booking API
  readonly VITE_CALENDLY_URL?: string;

  // 5. Google Maps API
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;

  // 6. Analytics & Tag Manager APIs
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GTM_ID?: string;

  // 7. Site & Contact Configuration
  readonly VITE_SITE_URL?: string;
  readonly VITE_COMPANY_EMAIL?: string;
  readonly VITE_COMPANY_PHONE?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_OFFICE_1?: string;
  readonly VITE_OFFICE_2?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

