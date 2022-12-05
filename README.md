# <center>✨ GETIR CLONE - FRONTEND ✨</center>

## 💻 Create React App 👇

```bash
npx create-react-app .
```

<hr>

## ❌ You can delete these files under "src" folder 👇

- setupTests.js
- reportWebVitals.js
- logo.svg
- index.css
- App.css
- App.test.js

## ✏ Configure "index.js" file after deleting files 👇

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## ✏ Configure "App.js" file after deleting files 👇

```javascript
function App() {
  return (
    <div className="App">
      Test
    </div>
  );
}

export default App;
```

<hr>

## 💻 Install Tailwind CSS 👇

```bash
npm install -D tailwindcss
npx tailwindcss init
```

## ✏ To configure your template paths; add the paths to all of your template files in your "tailwind.config.js" file 👇

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## ✔ To add the Tailwind directives to your CSS; create "tailwind.css" file under "src" folder and add this script to "package.json" file 👇

```json
    "watch": "npx tailwindcss -i src/tailwind.css -o src/style.css --watch"
```

## 🚩 Add the @tailwind directives for each of Tailwind’s layers to your main CSS file 👇

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<hr>

## ‼ Create "jsconfig.json" file under "src" folder to set "src" folder as Absolute Path and add 👇

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "build"
  ]
}
```