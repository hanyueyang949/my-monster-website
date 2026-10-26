# 👾 My Monster Website

A fun, interactive website featuring a friendly, skydiving monster! This project was created to showcase a combination of HTML, CSS, and JavaScript to create an engaging, animated user experience.

## 🚀 Features

- **Interactive Monster**: A custom-built monster created entirely with CSS.
- **Emotion Control**: Click the **Emotions** button to see the monster change its facial expression (Happy, Sad, Angry, Surprised).
- **Power Ability**: Click the **Power** button to make the monster breathe a giant blast of fire!
- **Color Customization**: Click the **Color** button to change the monster's skin color.
- **Speech**: Click the **Speak** button to hear the monster share its love for skydiving and travel.
- **Dynamic Movement**: Click anywhere on the page to make the monster bounce and move its arms and legs randomly.
- **Interactive Eyes**: The monster's pupils follow your mouse cursor around the screen.

## 🛠️ Technical Implementation

### HTML (`index.html`)
- Structured the page with a clean header, introduction section, and a dedicated "game area" for the monster.
- Used a semantic layout including `<header>`, `<nav>`, `<section>`, and `<footer>`.

### CSS (`style.css`)
- **CSS Variables**: Used `:root` variables for easy color management (e.g., `--monster-color`).
- **Custom Shapes**: Created the monster's body and parts using `border-radius`, absolute positioning, and CSS transitions for smooth animations.
- **Layering**: Used `z-index` to ensure the fire appears behind the mouth but in front of the body.
- **Responsiveness**: Used Flexbox to ensure the website is centered and looks good on different screen sizes.

### JavaScript (`script.js`)
- **DOM Manipulation**: Used `document.getElementById` and `querySelectorAll` to control the monster's appearance.
- **Event Listeners**: Implemented a global click listener on the `body` to trigger the monster's random movement and eye-tracking logic.
- **Dynamic Styling**: Updated CSS variables and class lists in real-time to change colors and emotions.
- **Randomization**: Used `Math.random()` to create natural-looking movements for the arms, legs, and body.

## 📂 Project Structure
```
my-monster-website/
├── index.html   # Main page structure
├── style.css    # Styling and animations
└── script.js    # Interactivity and logic
```

---
**Creado por hanyue** 🌟
