# Vanilla Sky

A clone of Bluesky using only TypeScript, CSS, and HTML.

Other than Vite for building and testing, no libraries or frameworks are used in this app.

None of the code in this repo is AI generated. While I did use ChatGPT to help with code review, I tried treat ChatGPT strictly as a source of feedback and advice.

## Goals

1. Refresh and improve my knowledge of web development fundamentals, including DOM manipulation, event handling, and browser API usage.
2. Gain a deeper understanding of the work abstracted away by modern libraries and frameworks, such as state management and component lifecycles.

## Quick Start

1. Clone this repository: `git clone https://github.com/your-username/vanilla-sky.git`
2. Navigate to the project directory: `cd vanilla-sky`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

## Features

- Post creation and editing
- Timeline view

## Project Organization

The project is organized to maintain a clear separation of concerns.

### Styles

- Global styles and variables are centralized in the `src/styles` folder and imported into `index.html`.
- Component-specific styles are scoped locally within their component folders.

```plaintext
src/
├── styles/
│   ├── variables.css
│   ├── global.css
├── components/
│   ├── Button/
│   │   ├── Button.css
│   │   ├── Button.ts
```

### Types

## Approach to Building Components

Components are created using object-oriented programming principles ...

### Elements

- No `.InnerHTML` due to security concens
- `.append(element)` for adding elements (vs. `appendChild()`)
- `.remove(element)`

#### Attributes

- `.setAttribute('id', "my-id")`
- `.removeAttribute('id', "my-id")`
- `.dataset.example`: access (or add new) `data` attributes on an element

### Classes

- `.classList.add('my-class')`
- `.classList.remove('my-class')`
- `.classList.toggle('my-class')`: remove if present, add if not present (pass in boolean for auto add/remove)

### Style

- `.style.backgroundColor('red')`: access css properties
