# Ten Changable CSS Properties

- **color:** Changes the text color of an element.
  (color: blue;)

- **background-color:** Sets the background color of an element.
(background-color: yellow;)

- **font-size:** Specifies the size of the text.
(font-size: 16px;)

- **margin:** Sets the space outside the border of an element.
(margin: 10px;)

- **padding:** Sets the space inside the border of an element.
(padding: 10px;)

- **border:** Sets the border around an element.
(border: 1px solid black;)

- **width:** Specifies the width of an element.
(width: 200px;)

- **height:** Specifies the height of an element.
(height: 100px;)

- **display:** Specifies how an element is displayed on the page.
(display: block;)

- **text-align:** Specifies the horizontal alignment of text.
(text-align: center;)

# Cascading

In the context of CSS, "cascading" refers to the way CSS rules are applied to HTML elements, where multiple rules can apply to a single element. The "cascading" aspect determines which rule takes precedence when there are conflicting styles.

### Order of Importance:

- **Inline styles:** Styles defined directly within an HTML element (using the style attribute) have the highest precedence. 
- **Internal styles:** Styles defined within a <style> tag in the HTML document have the next level of precedence.
- **External styles:** Styles defined in an external CSS file have lower precedence compared to inline and internal styles.

### Specificity:

- CSS rules are ranked by their specificity. More specific rules will override more general ones.
- **IDs** (#id) are more specific than classes (.class).
- **Classes** and attributes are more specific than tags.

### Source Order:

- When rules have the same specificity, the rule that appears later in the CSS (or HTML) will take precedence.

### Inheritance:

- Some CSS properties are inherited from parent elements. For example, the color property is inherited, so if a parent element has a color defined, its child elements will inherit that color unless specifically overridden.

### !important:

- The **!important** declaration can be used to override all other rules, regardless of specificity.

The cascading nature of CSS is essential for understanding how styles are applied and overridden, allowing developers to write effective and maintainable stylesheets.

# CSS3
CSS3 brought several new features and enhancements that significantly improved the styling and layout capabilities of web pages.

1. Modules
CSS3 is divided into several modules, allowing for more flexible and modular development and updates. Each module can be updated independently, making it easier to implement new features and maintain existing ones.

2. Selectors
CSS3 introduced new selectors, providing more powerful and flexible ways to select elements.

Attribute selectors: [attribute^="value"], [attribute$="value"], [attribute*="value"]
Pseudo-classes: :nth-child(), :nth-of-type(), :not(), :last-child
Pseudo-elements: ::before, ::after, ::first-letter, ::first-line

3. Box Model Enhancements
- **box-sizing:** This property allows you to include padding and border in an element's total width and height.

4. Backgrounds and Borders
- **Multiple backgrounds:** You can layer multiple background images.

5. Text Effects
- **Text shadow:** Adds shadow to text.

- **Web fonts:** The @font-face rule allows custom fonts to be loaded.

6. Color
- **RGBA and HSLA:** Adds support for RGB with alpha transparency and HSL with alpha transparency.

7. Gradients
- CSS3 introduced gradient backgrounds without the need for images.

8. Transitions and Animations

- **Transitions:** Smoothly animate property changes.

- **Animations:** Define keyframe animations.

9. Transforms
- CSS3 allows for 2D and 3D transformations.

10. Flexbox and Grid Layout

- **Flexbox:** A layout model for creating flexible and responsive layouts.

- **Grid:** A powerful layout system for complex designs

## Why These Changes Were Important
1. Improved Design Capabilities: The new features allowed designers to create more complex, visually appealing designs without relying on images or JavaScript.

2. Better Performance: Many new properties and features reduced the need for extra markup, images, and scripts, leading to faster loading times.

3. Responsive Design: Tools like Flexbox and Grid made it easier to create layouts that adapt to different screen sizes.

4. Enhanced User Experience: Transitions and animations allowed for smoother interactions and more engaging user experiences.

5. Modular Development: The modular nature of CSS3 made it easier to implement new features and maintain compatibility across different browsers and devices.

These enhancements have significantly contributed to the evolution of web design, making it more powerful, flexible, and user-friendly.
