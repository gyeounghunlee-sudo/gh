class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const display = document.createElement('div');
    display.setAttribute('class', 'display');

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        text-align: center;
      }
      .display {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
      }
      .number {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--card-bg, #f0f0f0);
        color: var(--text-color, #333);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 2px 4px var(--shadow-color, rgba(0,0,0,0.1));
        transition: background-color 0.3s, color 0.3s;
      }
      button {
        background-color: var(--button-bg, #4CAF50);
        color: var(--button-text, white);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 var(--shadow-color, rgba(0,0,0,0.2));
        transition: 0.3s;
      }
      button:hover {
        box-shadow: 0 8px 16px 0 var(--shadow-color, rgba(0,0,0,0.2));
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
    wrapper.appendChild(display);
  }

  generateNumbers() {
    const display = this.shadowRoot.querySelector('.display');
    display.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of [...numbers].sort((a, b) => a - b)) {
      const numberDiv = document.createElement('div');
      numberDiv.setAttribute('class', 'number');
      numberDiv.textContent = number;
      display.appendChild(numberDiv);
    }
  }
}

customElements.define('lotto-generator', LottoGenerator);

// Theme Toggling Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});
