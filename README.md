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
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## ✔ To add the Tailwind directives to your CSS; create "tailwind.css" file under "src" folder, add this script to "package.json" file and run this command at the terminal 👇

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

## ‼ Create "jsconfig.json" file in home directory to set "src" folder as Absolute Path and add 👇

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

<hr>

## ✔ Create a "components" folder under "src" folder. And add "Header.jsx", "HeroSection.jsx", "Categories.jsx", "Campaigns.jsx", "Favorites.jsx", "MobileApp.jsx", "Cards.jsx", "Footer.jsx" components and import them in "App.js" 👇

```javascript
import Header from "components/Header"
import HeroSection from "components/HeroSection"
import Categories from "components/Categories"
import Campaigns from "components/Campaigns"
import Favorites from "components/Favorites"
import MobileApp from "components/MobileApp"
import Cards from "components/Cards"
import Footer from "components/Footer"

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Categories/>
      <Campaigns/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
```

<hr>

## ✏ By default, Tailwind makes the entire default color palette available as background colors. You can customize your color palette by editing theme.colors or theme.extend.colors in your "tailwind.config.js" file 👇

```javascript
theme: {
    extend: {
      backgroundColor: {
        'brand-color': '#5d3ebc'
      }
    },
  },
```

<hr>

## 🚩 For "Header.jsx" copy the src of "getir" images from "https://getir.com/" and add the other links 👇

```javascript

```