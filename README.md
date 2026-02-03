# Povly Houng - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Fully responsive design for all devices
- **Animated**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast**: Optimized for performance with Next.js 14

## 📋 Sections

1. **Hero** - Introduction with profile photo and social links
2. **About** - Personal background and highlights
3. **Skills** - Technical skills categorized with progress bars
4. **Projects** - Featured projects with detailed descriptions
5. **Experience** - Work experience timeline
6. **Education** - Academic background and certifications
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
cd portfilo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3005](http://localhost:3005) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
portfilo/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Projects.tsx
│       │   ├── Experience.tsx
│       │   ├── Education.tsx
│       │   └── Contact.tsx
│       └── ThemeProvider.tsx
├── assets/
│   └── houng.png
├── public/
│   └── (static files)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Customization

### Update Personal Information
Edit the content in each section component under `src/components/sections/`:
- `Hero.tsx` - Name, title, and introduction
- `About.tsx` - Bio and highlights
- `Skills.tsx` - Technical skills
- `Projects.tsx` - Project details
- `Experience.tsx` - Work experience
- `Education.tsx` - Education details
- `Contact.tsx` - Contact information

### Change Colors
Modify the color palette in `tailwind.config.ts`:
```ts
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Add Profile Photo
Replace `/assets/houng.png` with your photo.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Povly Houng**
- Email: povlyhoung02@gmail.com
- GitHub: [@povlyhoung](https://github.com/povlyhoung)
- LinkedIn: [Povly Houng](https://linkedin.com/in/povlyhoung)
