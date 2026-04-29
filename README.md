# Portraitwala Gallery 📸

A premium, cinematic photography portfolio and digital art space showcasing the work of **Ayush Gupta** (aka @portraitwalagallery). This project is designed with a high-end, immersive aesthetic, featuring smooth animations, unique poetic reflections (shayaris), and a carefully curated visual journey.

---

## 🎨 About the Artist: Ayush Gupta
Ayush's journey into photography began in 2019 at his uncle's wedding, where a single shot on a newly launched **Google Pixel** sparked a lifelong passion. What started as curiosity evolved into a deep-seated mission to capture emotions that words fail to express.

Inspired by masters like **Ganesh Vanare**, **Vineet Vohra**, and **Raghu Rai**, Ayush believes in visual storytelling that is:
- **Free**, like light.
- **Real**, like emotions.
- **Eternal**, like memories.

---

## 🖼️ Gallery Structure & Features

### 1. Dynamic Asset Integration
The gallery automatically synchronizes with the `src/assets` directory. It dynamically imports and optimizes up to 50 unique frames, ensuring the portfolio is always up-to-date with the latest work.

### 2. Thematic Shayaris
Each "Art of Frame" is paired with a **unique poetic shayari**. These 50 distinct lines of poetry are mapped to specific images, creating a dual experience of visual and literal storytelling.

### 3. Interactive Cinematic Grid
- **Compact Layout**: A modern, uniform grid system that makes the portfolio easy to navigate.
- **Hover Pop-up**: Images zoom and "pop out" with cinematic depth (shadows and borders) when hovered.
- **Smooth Scroll**: Integrated with **Lenis** for a luxurious, fluid scrolling experience.
- **Glitch-Free Performance**: State-driven fade-in effects ensure images transition smoothly without flickering.

---

## 📂 Project Structure

```text
portraitwalagallery/
├── src/
│   ├── assets/               # Photographic assets
│   │   ├── creative jornal/  # Images for the journal section
│   │   ├── profile/          # Artist profile photos
│   │   └── *.jpg             # Main gallery frames (50 total)
│   ├── components/
│   │   ├── gallery/          # ImageCard, Lightbox, etc.
│   │   ├── layout/           # Sidebar, Navigation
│   │   └── ui/               # AboutSection, JournalSection, Cursor, Watermark
│   ├── store/                # Zustand state management
│   ├── pages/
│   │   ├── Home.tsx          # Main Cinematic Experience
│   │   └── Contact.tsx       # Booking & Inquiries
│   ├── App.tsx               # Root component with Lenis scroll logic
│   └── index.css             # Design system & Tailwind utilities
├── public/                   # Static icons & favicons
└── package.json              # Dependencies (React, Framer Motion, Lenis, Lucide)
```

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite
- **Styling**: TailwindCSS (Custom Premium Theme)
- **Animations**: Framer Motion
- **Scrolling**: Lenis Smooth Scroll
- **State**: Zustand

---

## 🚀 Getting Started

1. **Clone the repo**: `git clone <repo-url>`
2. **Install dependencies**: `npm install`
3. **Run locally**: `npm run dev`
4. **Build for production**: `npm run build`

---

> "Photography is the only language that can be understood anywhere in the world."
> — **PortraitwalaGallery**
