# 🚀 Devmetasol Website

> Full-service software agency offering full-stack development, staff augmentation, and digital marketing.

**Live URL:** https://devmetasol.com  
**Tech Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router v7

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages & Routes](#%EF%B8%8F-pages--routes)
- [Components](#-components)
- [Assets](#-assets)
- [Contact Info](#-contact-info)

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.0 | UI Framework |
| TypeScript | ~5.9.3 | Type Safety |
| Vite (rolldown-vite) | 7.2.5 | Build Tool & Dev Server |
| Tailwind CSS | ^4.1.17 | Styling |
| React Router DOM | ^7.10.1 | Client-side Routing |
| React Helmet Async | ^2.0.5 | SEO / Meta Tags |
| React Toastify | ^11.0.5 | Toast Notifications |

---

## ⚡ Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint
pnpm lint
```

---

## 📁 Project Structure

```
Devmetasol website/
├── index.html                  ← Entry HTML, SEO meta tags, structured data
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   └── safari-pinned-tab.svg
└── src/
    ├── main.tsx                ← React app entry point
    ├── App.tsx                 ← Router, Layout, Global WhatsApp button
    ├── App.css
    ├── index.css
    ├── components/             ← 50 reusable UI components
    ├── pages/                  ← 24 page-level views
    └── assets/                 ← Images, video, logos
```

---

## 🗺️ Pages & Routes

| Route | Page File | Description |
|---|---|---|
| `/` | `Home.tsx` | Main landing page |
| `/services` | `Services.tsx` | All services overview |
| `/services/custom-software-development` | `CustomSoftwareDevelopment.tsx` | Service detail page |
| `/services/cloud-infrastructure` | `CloudInfrastructure.tsx` | Service detail page |
| `/services/qa-support` | `QASupport.tsx` | Service detail page |
| `/services/next-gen-technologies` | `NextGenTechnologies.tsx` | Service detail page |
| `/services/digital-marketing` | `DigitalMarketingService.tsx` | Service detail page |
| `/services/staff-augmentation` | `StaffAugmentation.tsx` | Service detail page |
| `/services/:serviceName` | `ServiceDetail.tsx` | Dynamic service page (catch-all) |
| `/hire-an-expert` | `HireAnExpert.tsx` | Hire experts overview |
| `/hire-an-expert/:expertName` | `ExpertDetail.tsx` | Dynamic expert detail page |
| `/case-studies` | `CaseStudies.tsx` | Portfolio & case studies |
| `/blog` | `Blog.tsx` | Blog listing page |
| `/about-us` | `AboutUs.tsx` | Company overview |
| `/about-us/careers` | `Careers.tsx` | Job openings |
| `/about-us/blogs` | `Blog.tsx` | Blog (same component as /blog) |
| `/about-us/accessibility-statement` | `AccessibilityStatement.tsx` | Legal page |
| `/about-us/terms-and-conditions` | `TermsAndConditions.tsx` | Legal page |
| `/about-us/privacy-policy` | `PrivacyPolicy.tsx` | Legal page |
| `/about-us/cookie-policy` | `CookiePolicy.tsx` | Legal page |
| `/contact` | `Contact.tsx` | Contact page with form |
| `/locations` | `Locations.tsx` | Global offices & map |
| `/schedule-call` | `ScheduleCall.tsx` | Book a discovery call |
| `/enter-details` | `EnterDetails.tsx` | Lead capture form |
| `*` | `NotFound.tsx` | 404 fallback page |

---

## 🧩 Components

### 🏗️ Layout (Always Rendered)

| Component | Description |
|---|---|
| `Header.tsx` | Sticky navigation with mega dropdowns, mobile hamburger menu |
| `Footer.tsx` | Footer used on the **Home** page |
| `AllFooter.tsx` | Footer used on **all other pages** |
| `SEO.tsx` | React Helmet wrapper — meta tags, Open Graph, structured data |

### 🏠 Home Page Sections

| Component | Description |
|---|---|
| `Hero.tsx` | Hero banner with CTA |
| `Devmetasol.tsx` | Company intro / stats section |
| `ServiceCards.tsx` | Cards listing all services |
| `WhyChooseUs.tsx` | Reasons to choose Devmetasol |
| `OurProcess.tsx` | Step-by-step work process |
| `CustomerTestimonials.tsx` | Client testimonials carousel |
| `OurClients.tsx` | Client logos grid |
| `MeetOurExperts.tsx` | Team members preview |
| `FAQ.tsx` | Frequently asked questions |

### 📋 About Page Sections

| Component | Description |
|---|---|
| `AboutHeroSection.tsx` | Hero banner for About Us |
| `Devmetasol.tsx` | Shared company description block |
| `CoreValues.tsx` | Company core values |
| `OurOffices.tsx` | Office locations display |
| `Mission.tsx` | *(Currently commented out)* |
| `Vision.tsx` | *(Currently commented out)* |
| `MeetTheTeam.tsx` | *(Currently commented out)* |

### 🛠️ Services Sections

| Component | Description |
|---|---|
| `ServicesHero.tsx` | Services page hero |
| `ServicesWeOffer.tsx` | Full list of services |
| `FullStackExpertise.tsx` | Full-stack tech expertise display |
| `CustomSoftwareSolutionsMinimal.tsx` | Custom software section |
| `NextGenTechnologiesSimple.tsx` | AI/ML/Blockchain section |
| `DigitalMarketing.tsx` | Digital marketing section |
| `WhyChooseOurServices.tsx` | Service differentiators |
| `InnovativeBusinessModel.tsx` | Business model highlight |
| `SuccessStories.tsx` | Client success stories |

### 👔 Hire An Expert Sections

| Component | Description |
|---|---|
| `HireExpertBanner.tsx` | Main hire banner |
| `HireDevelopersBanner.tsx` | Developer hiring section |
| `HireCreativeDesignersBanner.tsx` | Designer hiring section |
| `HireDigitalMarketingBanner.tsx` | Marketing expert hiring section |
| `CustomTeamBanner.tsx` | Custom team CTA |
| `DesignBanner.tsx` | Design services banner |
| `HireExpertFAQ.tsx` | Hiring FAQ section |

### 📁 Case Studies

| Component | Description |
|---|---|
| `CaseStudiesHero.tsx` | Case studies page hero |
| `CaseStudiesGrid.tsx` | Grid of case study cards |
| `CaseStudiesClients.tsx` | Featured clients in case studies |

### 📞 Contact Page Sections

| Component | Description |
|---|---|
| `EndlessInnovators.tsx` | Contact page intro section |
| `ContactForm.tsx` | Full contact form with toast notifications |
| `OfficesMap.tsx` | Interactive offices map |
| `OurClientsSimple.tsx` | Simplified client logos |
| `OurOffices.tsx` | Office contact info blocks |

### 🌐 Shared / Misc

| Component | Description |
|---|---|
| `ClientTestimonials.tsx` | Testimonials (used on About) |
| `CEOMessage.tsx` | CEO message block |
| `MeetTheTeam.tsx` | Team member cards |
| `Blog.tsx` *(component)* | Blog listing component |

---

## 🌐 Global Features

```
App.tsx
 ├── <Header />              ← Sticky top nav on every page
 ├── <Routes>                ← All 24+ page routes
 ├── <ToastContainer />      ← Toast notifications (top-right)
 └── <WhatsApp Button />     ← Fixed floating button (bottom-right)
                                 → Links to: wa.me/923320409566
```

---

## 🖼️ Assets

```
src/assets/
├── Logos & Branding
│   ├── logo.jpeg
│   └── logo1.svg
├── Team Photos
│   ├── team1.jpg – team4.jpg
│   ├── team-member-1.png – team-member-3.png
│   ├── team-photo.png
│   ├── profileimage.jpg
│   ├── profileimage2.jpg
│   └── profiles3.jpg
├── Client Logos
│   ├── CMD-Sons.avif
│   ├── ittifaq.avif
│   ├── caribbean-e1757912648357.avif
│   ├── hussain-rehar.avif
│   └── sumato-erp-title.webp.bv.webp
├── Tech Stack Logos (.webp)
│   ├── React.webp, Angular.webp, Vue.webp
│   ├── nodejs.webp, Nestjs.webp, nextjs.webp
│   ├── Larvel.webp, Rails.webp, Microsoft.net.webp
│   ├── flutter.webp, iphone.webp
│   └── jQuery.webp
├── Service & Banner Images
│   ├── Custom-Software-Solutions.avif
│   ├── Digital-Future.avif
│   ├── mobileapp.webp / mobileapp.png
│   ├── web.webp
│   └── appselec.avif
└── video.mp4                 ← Background/promo video
```

---

## 📞 Contact Info

| Field | Value |
|---|---|
| **Email** | careers@devmetasol.com |
| **Phone** | +92 330 4527519 |
| **WhatsApp** | +92 332 0409566 |
| **Office 1** | LUMS Incubation Center, Lahore, Pakistan |
| **Office 2** | Jumeirah Lake Towers, Dubai, UAE |
| **Facebook** | [facebook.com/profile.php?id=61568096641046](https://www.facebook.com/profile.php?id=61568096641046&sk=photos) |
| **Threads** | [@king_techsol](https://www.threads.com/@king_techsol) |

---

## 🏢 Office Locations

| City / Location | Country |
|---|---|
| LUMS Incubation Center, Lahore | Pakistan 🇵🇰 |
| Jumeirah Lake Towers, Dubai | United Arab Emirates 🇦🇪 |
| New York | United States 🇺🇸 |
| New Jersey | United States 🇺🇸 |
| Toronto | Canada 🇨🇦 |
| Riyadh | Saudi Arabia 🇸🇦 |
| Lisbon | Portugal 🇵🇹 |

---

## 📊 Project Stats

| Metric | Count |
|---|---|
| Total Pages | 24 |
| Total Components | 50 |
| Total Routes | 25+ |
| Asset Files | ~35 |
| Tech Stack Packages | 5 dependencies |

---

*© 2024 Devmetasol. All Rights Reserved.*
