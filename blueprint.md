
# Lotto Number Generator

## Overview

This project is a simple web application that generates lottery numbers.

## Features

*   Generate 6 unique random numbers between 1 and 45.
*   Display the generated numbers to the user.
*   A button to trigger the number generation.
*   Modern and clean user interface.

## Current Plan

1.  **`index.html`**:
    *   Change the title to "Lotto Number Generator".
    *   Add a heading.
    *   Use a custom element `<lotto-generator>` to encapsulate the application.

2.  **`main.js`**:
    *   Create a `<lotto-generator>` web component.
    *   The component will contain a button and a display area for the numbers.
    *   Clicking the button will trigger the `generateNumbers` function.
    *   The `generateNumbers` function will:
        *   Create a set to store unique numbers.
        *   Generate random numbers between 1 and 45 until the set contains 6 numbers.
        *   Display the numbers in the display area.

3.  **`style.css`**:
    *   Add styles for the overall layout, button, and number display.
    *   Use a modern and visually appealing design.
