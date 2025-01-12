# 🍦 Vanillasky

Vanillasky is a clone of the social media app [Bluesky](https://bsky.app/).

It’s a single-page application built with TypeScript, CSS, and HTML. Aside from Vite, no third-party software, frameworks, or libraries were used in this project.

Vanillasky is frontend-only for the moment, so posts and other user data don’t persist between sessions. I plan to implement a backend soon using Node and a similar vanilla TypeScript approach.

None of the code in this repository is AI-generated. I used ChatGPT solely for code review, debugging, and proofreading documentation.

## 📌 Project Status

**In Development**: This project is currently a work in progress. I'm actively implementing additional features and improvements.
**Estimated completion**: Spring 2025.

## 🎯 Goals

1. Refresh and improve my knowledge of web development fundamentals, including DOM manipulation, event handling, and browser API usage.
2. Gain a deeper understanding of the work abstracted away by modern libraries and frameworks, such as state management and component lifecycles.

## 🛠️ Tech Stack

- **Languages**: TypeScript, HTML, CSS
- **Build Tool**: Vite

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

## 📁 Project Overview

### 🤔 Creating a Single-Page Application without a Framework

Reproducing the single-page application approach used by most modern frameworks was one of the most challening parts of building Vanillasky.

- Routing, state, etc.

### 🧩 Components

Although I drew inspiration from React, I opted for an object-oriented rather than functional approach to buidling components.

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
- **Manually Reproducing SPA experience**: ...

<!-- ## 📷 Demo

Coming soon

## ♿ Accessibility

- Keyboard-friendly navigation is being implemented.
- ARIA roles are planned to improve compatibility with screen readers. -->
