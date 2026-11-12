# FoundIt — Everyday Belongings Recovery

**Student Name:** Moeez Ur Rehman  
**Roll No:** L1F24BSCS0990  
**Course:** Web Technologies (BSCS Semester 5 — Project 1)  
**Theme:** Smart QR-Enabled Everyday Carry & Belongings Recovery Platform  

## Teacher Approval Record
- **Starting Route:** Route B (Custom Editorial Design)
- **Approval Status:** Approved prior to initial repository commit (`14/10/2026`).

---

## Project Structure & Assignment Mapping

### Assignment 1 (Pages 1 to 3)
1. **Home (`index.html` + `home.css` & `global.css`)**
   - Hero overview, 3-step recovery process, ordered/unordered recovery checklist, floated product photo, and embedded video/audio walkthrough.
   - Practises element/class/ID selectors, typography, borders, `position`, `float`, `overflow`, and `@keyframes` reveal animations.
2. **Register (`register.html` + `register.css`)**
   - Owner registration and item reporting form with all required HTML5 input types (`text`, `email`, `password`, `url`, `date`, `time`, `select`, `number`, `color`, `range`, `file`, `textarea`, `radio`, `checkbox`) and validation attributes (`required`, `readonly`, `disabled`, `min`, `max`, `minlength`, `maxlength`, `checked`, `selected`).
   - Practises attribute selectors (`input[readonly]`), combinators (`label.choice input`), pseudo-classes (`:hover`, `:focus`, `:valid`, `:invalid`), and pseudo-elements (`::before`, `::placeholder`).
3. **Login (`login.html` + `auth.css` + `login.js`)**
   - Owner sign-in form with centered stacked navigation header, CSS validation states, and live DOM password/email check.

### Assignment 2 (Pages 4 to 6)
4. **Owner Dashboard (`dashboard.html` + `dashboard.css`)**
   - Flexbox summary statistics cards with hover transitions, registered belongings data table with status badges, and finder alert card.
5. **Add Item (`add-item.html` + `add-item.css`)**
   - Responsive CSS Grid (`auto-fit`) showcasing three QR tag product cards (`<figure>` / `<figcaption>`) with `@keyframes` entrance animation, followed by an item registration form.
6. **Public Item Recovery (`recover.html` + `recover.css` + `recover.js`)**
   - Mixed CSS Grid + Flexbox layout displaying missing item status alongside a finder contact form with live DOM input validation.

---

## AI Usage Log

| Tool Used | What Was Asked | What Was Changed / Learned |
| :--- | :--- | :--- |
| Gemini | Brainstorming FoundIt retro-editorial color palette (`#263D42`, `#78866D`, `#F0E9D9`, `#C87950`) and typography pairing. | Applied CSS custom properties (`:root`) in `global.css` across all six pages. |
| Gemini | Debugging relative image paths and responsive CSS Grid / Flexbox breakpoints (`900px` and `600px`). | Fixed image filenames (`tag1.jpg`, `tag2.jpg`, `tag3.jpg`) and added tablet/mobile media queries to every stylesheet. |
| Gemini | Guidance on DOM form validation structure for `recover.js` and `login.js`. | Implemented `input` and `submit` event listeners to validate fields and display live feedback messages. |
