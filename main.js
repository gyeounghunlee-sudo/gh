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
        gap: 10px;
        margin-top: 20px;
      }
      .number {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f0f0f0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
