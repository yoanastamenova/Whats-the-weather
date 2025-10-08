# ☁️ What's the Weather? ☁️

A modern, interactive weather application built with Next.js that provides real-time weather forecasts and conditions worldwide. Features stunning UI with glassmorphism design, interactive maps, and integration with AEMET (Spanish Meteorological Agency) API.

## ✨ Features

- **Interactive Maps** - Explore real-time weather conditions with dynamic, user-friendly maps
- **RealFeel® Technology** - Advanced algorithm that factors in humidity, wind, and sun intensity to show how the weather actually feels
- **Severe Weather Alerts** - Stay safe with immediate notifications for storms and extreme conditions
- **Hourly & Daily Forecasts** - Precise hour-by-hour and extended forecasts
- **Location-Specific Data** - Currently supporting Spain (Valencia) with AEMET API integration
- **Responsive Design** - Beautiful UI that works seamlessly across all devices
- **Glassmorphism UI** - Modern design with frosted glass effects and smooth animations

## 🛠️ Tech Stack


<div align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  </a>
  <a href="https://typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://ui.shadcn.com/">
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</a>
<a href="https://swagger.io/">
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</a>
<a href="https://www.openapis.org/">
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white" alt="OpenAPI" />
</a>
<a href="https://heroicons.com/">
  <img src="https://img.shields.io/badge/Heroicons-8B5CF6?style=for-the-badge&logo=heroicons&logoColor=white" alt="Heroicons" />
</a>
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager
- AEMET API key (for Spanish weather data)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd whats-the-weather
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env` file in the root directory and add your AEMET API key:
```bash
AEMET_API_KEY="your-aemet-api-key-here"
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
whats-the-weather/
├── app/
│   ├── api/
│   │   ├── aemet/          # AEMET API route handler
│   │   └── germany/        # Germany API route handler
│   ├── locations/
│   │   └── spain/          # Spain-specific weather pages
│   ├── maps/               # Interactive weather maps
│   ├── warnings/           # Weather warnings/alerts
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Navigation component
│   ├── carousel.tsx        # Weather carousel
│   └── background.tsx      # Animated background
├── lib/                    # Utility functions
├── public/                 # Static assets
└── .env                    # Environment variables
```

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# AEMET API (Spanish Meteorological Agency)
AEMET_API_KEY=your_api_key_here
```

### Getting an AEMET API Key

1. Visit [AEMET OpenData](https://opendata.aemet.es/)
2. Register for a free account
3. Generate your API key
4. Add it to your `.env` file

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌍 API Integration

### AEMET API (Spain)

The application integrates with AEMET (Agencia Estatal de Meteorología) to provide real-time weather data for Spanish locations:

- **Station**: Valencia Viveros (IDEMA: 8416Y)
- **Data Points**: Temperature, humidity, pressure, wind speed, precipitation, sunshine duration
- **Conditions**: Dynamic weather conditions based on multiple factors (rain, sunshine, humidity)

## 🎨 Design Features

- **Glassmorphism Effects** - Frosted glass design with backdrop blur
- **Smooth Animations** - CSS animations including floating elements
- **Responsive Layout** - Mobile-first design approach
- **Dark/Light Mode Support** - Tailwind CSS theming
- **Interactive Components** - Hover effects and transitions


## 📝 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [shadcn/ui Documentation](https://ui.shadcn.com) - Learn about the UI components

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is private and not licensed for public use.
