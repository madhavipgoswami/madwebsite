# Madhavi Goswami, CFA - Personal Website

A modern, dynamic personal website built with React and Vite, designed to showcase your portfolio, skills, and projects.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Vite
- 📱 Mobile-friendly interface
- 🎯 Smooth scrolling navigation
- 💼 Dynamic project showcase with filtering
- 📧 Contact form
- 🌟 Animated typing effect in hero section
- 📊 Skills visualization with progress bars

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy"

The site will be live in minutes!

## Customization

### Update Personal Information

- Edit `src/components/Hero.jsx` to change the name and roles
- Update `src/components/About.jsx` with your personal story
- Modify `src/components/Skills.jsx` to reflect your skills
- Update `src/components/Projects.jsx` with your projects
- Change social links in `src/components/Contact.jsx`

### Styling

All styles are in `src/index.css`. You can customize:
- Colors in the `:root` CSS variables
- Fonts and typography
- Spacing and layout
- Animations

### Contact Form

The contact form currently shows a success message. To make it functional:
- Integrate with a service like Formspree, EmailJS, or your own backend
- Update the `handleSubmit` function in `src/components/Contact.jsx`

## Technologies Used

- React 18
- Vite
- React Router DOM
- CSS3 (Custom Properties, Grid, Flexbox)

## License

This project is open source and available for personal use.
