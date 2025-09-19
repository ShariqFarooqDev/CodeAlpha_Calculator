# Basic Calculator

A responsive, browser-based calculator that supports **basic** and **scientific operations**, complete with a **history panel**.  
Built using **HTML, CSS, and JavaScript**, the calculator features a modern **glassmorphism UI**, keyboard support, and animated button effects.

---

## Table of Contents

- [Features](#features)  
- [Demo](#demo)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Configuration](#configuration)  
- [Examples](#examples)  
- [Troubleshooting](#troubleshooting)  
- [Contributors](#contributors)  
- [License](#license)  

---

## Features

- **Basic operations**: `+`, `-`, `×`, `÷`, `%`.  
- **Scientific functions**:  
  - `sin`, `cos`, `tan` (toggle between degrees and radians).  
  - Square root `√`.  
  - Exponentiation `^`.  
  - Constants: `π` and `e`.  
- **History panel**:  
  - Stores last **10 calculations**.  
  - Clearable with a single button.  
- **Keyboard support**:  
  - Numbers `0–9`, decimal `.`, operators `+ - * /`.  
  - `Enter` → evaluate (`=`).  
  - `Escape` → clear (`AC`).  
  - `Backspace` → delete last digit.  
- **Responsive design**: Works on desktops, tablets, and mobile devices.  
- **Glassmorphism styling** with button press animations.  
- **Error handling**: Displays `"Error"` for invalid operations (e.g., sqrt of negative numbers).  

---

## Demo

To run the calculator, simply open the `index.html` file in your browser.  
No build tools or server setup required.

---

## Installation

1. Clone or download this repository:  
   ```bash
   git clone https://github.com/your-username/basic-calculator.git
   cd basic-calculator
   ```
2. Open `index.html` in your browser.

---

## Usage

- Click buttons on the interface or use your keyboard to enter expressions.  
- Press **AC** to reset the calculator.  
- Switch between **DEG** and **RAD** modes for trigonometric functions.  
- Review your past calculations in the **History panel**.  
- Clear history with the **Clear History** button.  

---

## Project Structure

```plaintext
basic-calculator/
├── index.html      # Main HTML layout
├── styles.css      # CSS styles (glassmorphism & responsiveness)
├── script.js       # Calculator logic & history handling
└── README.md       # Documentation
```

---

## Configuration

- External dependency: [Font Awesome](https://cdnjs.com/libraries/font-awesome) for button icons (loaded via CDN).  
- All logic runs client-side — no additional configuration required.  

---

## Examples

**Example 1**  
Input: `2 + 3 * 4`  
Output: `14`  

**Example 2**  
Input: `sin(30)` with `DEG` mode  
Output: `0.5`  

**Example 3**  
Input: `√(25)`  
Output: `5`  

**Example 4**  
Input: `(10 + 5) / 3`  
Output: `5`  

---

## Troubleshooting

- **Problem:** Display shows `"Error"`.  
  **Solution:** Invalid input (e.g., division by zero, invalid characters, negative square root). Press **AC** to reset.  

- **Problem:** Trigonometric results look incorrect.  
  **Solution:** Check angle mode (**DEG vs RAD**).  

- **Problem:** Calculator doesn’t respond to keyboard input.  
  **Solution:** Ensure browser focus is on the calculator window.  

---

## Contributors

- **Your Name** – Initial Development  

Contributions are welcome! Fork this repo and submit a pull request.

---

## License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute with attribution.
