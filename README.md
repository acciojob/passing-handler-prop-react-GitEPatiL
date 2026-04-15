# 🎨 Passing Handler Prop in React

A beautifully crafted mini-project demonstrating how to effectively pass handler functions as props in a modern React application. This interactive web app allows users to dynamically select from a list of vibrant colors and apply those aesthetic gradients to specific component blocks on the screen.

![Project Status](https://img.shields.io/badge/Status-Completed-success) ![React](https://img.shields.io/badge/React-v16.13.1-blue) ![Webpack](https://img.shields.io/badge/Webpack-4.44.2-orange)

---

## ✨ Features

* **Dynamic State Management:** Utilizes React's `useState` hook to manage background color states smoothly.
* **Component Reusability:** Modular components (`ColourSelector`, `Selection`) that communicate seamlessly through props.
* **Modern UI:** A clean, dark-mode aesthetic with vibrant call-to-action color palette styled in pure CSS.
* **Interactive Experience:** Click a color to stage it, and click a box to paint it!

---

## 🛠️ Project Structure

The codebase is organized following best practices for a scalable React application:

```text
├── src/
│   ├── components/
│   │   ├── App.js             // Main orchestrator component
│   │   ├── ColourSelector.js  // The interactive color buttons
│   │   └── Selection.js       // The target blocks to be painted
│   ├── styles/
│   │   ├── App.css            // Core global UI styles & layouts
│   │   └── Child.css          // Scoped styles for the targeted visual blocks
│   └── index.js               // Application entry point
├── config/                    // Test & bundler stubs
├── package.json               // Project dependency configuration
├── webpack.config.js          // Webpack bundler configuration
└── .babelrc                   // Babel compiler configuration
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
* **Node.js** (v14 or above recommended)
* **npm** or **yarn**

### Installation

1. **Verify your directory:** Make sure you are in the project folder.
   ```bash
   cd passing-handler-prop-react-GitEPatiL
   ```

2. **Install all necessary dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080/` (or the port defined by Webpack Dev Server) to view the project in action.

---

## 📝 What Was Added / Updated

As part of the recent project review, the following improvements were introduced:
- **Dependency Installation:** Successfully installed and resolved all required packages (`node_modules`) defined in `package.json` to configure the correct legacy Node/React environment (Babel, Webpack, Cypress, Jest, etc.).
- **Modernized Documentation:** Designed and added this comprehensive `README.md` to cleanly outline the architecture, provide setup steps, and elevate the standard of the project's presentation.

---

> [!NOTE]
> **Learning Context:** This project revolves around the concept of "Lifting State Up". The `nextBackground` state is maintained via hooks in `App.js` and is passed down (with its modifier function) into the `ColourSelector` children. Once staged, the lower `Selection` components then utilize the elevated `applyColor` handler!
