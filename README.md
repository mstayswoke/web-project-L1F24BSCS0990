# FoundIt — Everyday Belongings Recovery

**Student Name:** Moeez Ur Rehman  
**Roll No:** L1F24BSCS0990  
**Course:** Web Technologies (BSCS Semester 5 — Project 1)  
**Theme:** Smart Recovery System Platform  

## Teacher Approval Record
- **Starting Route:** Route B (Custom Editorial Design)
- **Approval Status:** Approved prior to initial repository commit (`14/10/2026`).

---

## Project Structure & Assignment Mapping

## 📂 Assignment 1 — Pages 1 to 3 (Click to View Code)

1. **Page 1: Home**
   - HTML: [index.html](index.html)
   - CSS: [home.css](home.css) | Shared: [global.css](global.css)
   - *Features:* Hero overview, 3-step guide, recovery checklist, floated photo, and embedded video/audio.

2. **Page 2: Register**
   - HTML: [register.html](register.html)
   - CSS: [register.css](register.css)
   - *Features:* Owner registration form with all required HTML5 inputs and CSS validation states.

3. **Page 3: Login**
   - HTML: [login.html](login.html)
   - CSS: [auth.css](auth.css)
   - *Features:* Centered editorial header and owner sign-in form.

---

## 📂 Assignment 2 — Pages 4 to 6 (Click to View Code)

4. **Page 4: Owner Dashboard**
   - HTML: [dashboard.html](dashboard.html)
   - CSS: [dashboard.css](dashboard.css)
   - *Features:* Flexbox summary statistics cards, belongings data table, and finder alerts.

5. **Page 5: Add Item**
   - HTML: [add-item.html](add-item.html)
   - CSS: [add-item.css](add-item.css)
   - *Features:* Responsive CSS Grid (`auto-fit`) showcasing three QR tag product cards (`<figure>` / `<figcaption>`) and registration form.

6. **Page 6: Public Item Recovery**
   - HTML: [recover.html](recover.html)
   - CSS: [recover.css](recover.css)
   - *Features:* Two-column CSS Grid + Flexbox layout for reporting found items.
---

## AI Usage Log

| Tool Used | What Was Asked | What Was Changed / Learned |
| :--- | :--- | :--- |
| Gemini | Brainstorming FoundIt retro-editorial color palette (`#263D42`, `#78866D`, `#F0E9D9`, `#C87950`) and typography pairing. | Applied CSS custom properties (`:root`) in `global.css` across all six pages. |
| Gemini | Debugging relative image paths and responsive CSS Grid / Flexbox breakpoints (`900px` and `600px`). | Fixed image filenames (`tag1.jpg`, `tag2.jpg`, `tag3.jpg`) and added tablet/mobile media queries to every stylesheet. |
| Gemini | Guidance on DOM form validation structure for `recover.js` and `login.js`. | Implemented `input` and `submit` event listeners to validate fields and display live feedback messages. |
