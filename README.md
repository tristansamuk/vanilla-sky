# 🍦 Vanillasky

Vanillasky is a clone of the social media platform [Bluesky](https://bsky.app/) built using only TypeScript, CSS, and HTML.

Other than Vite for building and testing, I didn't use any third-party software, frameworks, or libraries.

This initial version of the project is frontend-only, so posts and other user data don't persist between sessions. However, I plan to implement a backend as a future project, most likely using Node and a similar vanilla TypeScript approach.

And while I love using AI tools, none of the code in this repo is AI-generated. I used ChatGPT strictly for help with code review, debugging, and proof-reading documentation.

## 📌 Project Status

**In Development**: This project is currently a work in progress. I'm actively implementing additional features and improvements. Estimated completion is spring 2025.

## 🎯 Goals

1. Refresh and improve my knowledge of web development fundamentals, including DOM manipulation, event handling, and browser API usage.
2. Gain a deeper understanding of the work abstracted away by modern libraries and frameworks, such as state management and component lifecycles.

## 🛠️ Tech Stack

- **Languages**: TypeScript, HTML, CSS
- **Build Tool**: Vite
- **Testing**: Vitetest

## 🚀 Quick Start

1. Clone this repository: `git clone https://github.com/your-username/vanilla-sky.git`
2. Navigate to the project directory: `cd vanilla-sky`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

## ✨ Features

### ✅ Completed Features

- Responsive page layout and navigation

### 🌟 Planned Features

- Feed view
- Post creation, editing, and deletion
- Likes and comments
- User profiles
- Basic authentication
- Backend for persistent data

## 📁 Project Organization

The project is organized to maintain a clear separation of concerns, with styles, components, and types in distinct folders.

### 🧩 Components

Although this app includes multiple HTML pages, I’ve adopted an SPA-inspired approach within each page by dynamically rendering all content inside a single `<div>` using reusable UI components. While I initially considered using Web Components, I ultimately decided that sticking with standard HTML elements better aligned with the "vanilla" philosophy of the project.

That said, I drew inspiration from Web Components in one key way: the use of `<template>` elements. Each component is built using `<template>` elements and rendered through a class-based, object-oriented programming approach.

I find templates much easier to work with than creating HTML elements programmatically using DOM methods. Templates also provide the added convenience of syntax highlighting and auto-completion, which make refactoring or adding elements far less error-prone compared to working with template literals. The main trade-off was the need to manually duplicate shared template elements, like `Layout` and `Navigation`, across pages. However, the repetition was manageable in a small project like this.

### 💅 Styles

- Global styles and variables are centralized in the `src/styles` folder and imported into `index.html`.
- Component-specific styles are scoped locally within their component folders.

```
src/
├── styles/
│   ├── variables.css
│   ├── global.css
├── components/
│   ├── Button/
│   │   ├── Button.css
│   │   ├── Button.ts
```

### 🔒 Constants

Constants such as UI strings and SVG paths are stored in separate files for better maintainability and reusability.

### 📐 Types

Custom TypeScript interfaces and types are defined for strongly typing components, application state, and other entities to ensure clarity and maintainability...

## 🤔 Challenges

- **Dynamic rendering without frameworks**: Managing state and DOM updates manually was challenging, but it deepened my understanding of browser APIs.
- **Repetition in shared templates**: Manually duplicating shared components like `Layout` and `Navigation` across pages was a trade-off, but manageable in this project's small scope.

<!-- ## 📷 Demo

Coming soon

## ♿ Accessibility

- Keyboard-friendly navigation is being implemented.
- ARIA roles are planned to improve compatibility with screen readers. -->
