# 🟩 GitHub Contributions Viewer (Next.js + Tailwind CSS)

This is a simple GitHub Contributions Viewer built with **Next.js** and **Tailwind CSS**. It fetches and displays a GitHub user's contribution graph by scraping the raw contribution calendar HTML and rendering it on your site.

---

## 🎯 What You’re Achieving

You are building a **fully client-rendered** app that:

- Takes a GitHub username via URL query (e.g. `?username=vagabond-0`)
- Fetches the user’s GitHub contribution graph (HTML table embedded in their profile)
- Parses and injects it directly into your UI
- Styles the table with Tailwind CSS to make it visually appealing

This can be used for:

- Developer portfolios
- GitHub visualizers
- Open-source dashboards

---

## 🛠 Tech Stack

- **Next.js** – React framework
- **Tailwind CSS** – Utility-first CSS framework
- **HTML Parsing** – Built-in fetch and basic parsing (no Axios or Cheerio)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-contrib.git
cd github-contrib
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open the application

Visit:

```
http://localhost:3000/?username=YOUR_GITHUB_USERNAME
```

Example:

```
http://localhost:3000/?username=vagabond-0
```

---

## 🧠 How It Works

1. **Client loads** the app with a GitHub username from the query.
2. The `useEffect()` hook fetches the raw GitHub contribution page:
   ```
   https://github.com/users/USERNAME/contributions
   ```
3. The HTML is extracted and rendered using `dangerouslySetInnerHTML`.
4. Tailwind styles are applied to make it responsive and neat.

---

## 🖼️ Screenshot

> Insert a screenshot of your app displaying a contribution graph here.

---

## 📁 Folder Structure

```
/pages
  └── index.js            → Main page with fetch and render logic
/public
/styles
  └── globals.css         → Tailwind CSS global styles
/tailwind.config.js       → Tailwind config
```

---

## ✅ Customization Ideas

- Add dark mode or contribution color themes
- Add a text input to type username instead of URL query
- Export contribution calendar as PNG/SVG
- Add hover effects to squares

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Credits

Inspired by GitHub's contribution calendar and built with ❤️ using Next.js and Tailwind CSS.

