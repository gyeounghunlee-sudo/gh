# Lotto Number Generator

## Overview

This project is a simple web application that generates lottery numbers with a modern UI and theme support.

## Features

*   **Lotto Number Generator**: Generates 6 unique random numbers between 1 and 45.
*   **Partnership Inquiry Form**: A contact form integrated with Formspree for handling inquiries.
*   **Theme Support**: Integrated Dark and Light mode toggle.
*   **Persistence**: Theme preference is saved in `localStorage`.
*   **Web Components**: Reusable `<lotto-generator>` custom element for encapsulated logic and styles.
*   **Modern UI**: Responsive design with smooth transitions and subtle shadows.

## Design

*   **Colors**: Dynamic color palette controlled via CSS variables (`--bg-color`, `--text-color`, etc.).
*   **Transitions**: Smooth transitions for background and color changes.
*   **Iconography/UI**: Clear toggle button and stylized number containers.

## Implementation Details

1.  **`index.html`**:
    *   Entry point with a theme toggle button and the `<lotto-generator>` custom element.

2.  **`style.css`**:
    *   Defines CSS variables for `:root` (light) and `[data-theme="dark"]`.
    *   Global styles for body, headings, and the theme toggle button.

3.  **`main.js`**:
    *   Defines the `LottoGenerator` class.
    *   Handles the theme switching logic and state persistence.
    *   Uses Shadow DOM for component encapsulation while referencing global CSS variables.
