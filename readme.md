# Habit Tracker Heatmap (Local-First Demo)

A **local-first habit tracker** that visualizes daily consistency using a **GitHub-style heatmap**.

No accounts. No backend. No analytics. Your data never leaves the browser.

---

## Why This Exists

Habit tracking apps are everywhere—but most are overbuilt.

This project demonstrates how far you can go with:

* Vanilla JavaScript
* Local storage
* Thoughtful data modeling
* Clear visual feedback

It’s intentionally small, readable, and easy to extend.

---

## What This Demo Shows

* 📅 **Daily habit tracking**
* 🔥 **GitHub-style contribution heatmap**
* 💾 **Local-first persistence** (`localStorage`)
* 📴 **Offline support**
* 🧠 **Simple data modeling** (date-based keys)
* 🎨 **Clean, modern UI**

---

## Screenshot

> ![CleanShot 2025-12-14 at 15 29 47@2x](https://github.com/user-attachments/assets/b54714be-b845-45f3-b5ef-69267e05397d)


---

## Live Demo in Use

> [https://www.yuzool.com/habit-tracker.html](https://www.yuzool.com/habit-tracker.html)

---

## Project Structure

```txt
habit-heatmap-demo/
├── index.html
├── style.css
├── app.js
├── heatmap.js
├── storage.js
└── README.md
```

---

## Data Model

Habits are stored as a date-keyed map:

```js
{
  "2025-02-01": 1,
  "2025-02-02": 3,
  "2025-02-03": 0
}
```

This allows:

* fast lookups
* easy aggregation
* flexible intensity levels

---

## Design Decisions

* **Date-keyed storage** keeps logic simple
* **Intensity levels** communicate progress at a glance
* **No auth** keeps friction at zero
* **No charts library** keeps bundle size minimal

---

## Possible Extensions

* Multiple habits
* Streak counter
* Export / import
* Year selector
* Dark / light themes
* PWA install support

---

## License

MIT

---

## Author

Built as a local-first demo.

More tools → **[yuzool.com](https://www.yuzool.com)**
