# 🐾 Pet Expense Tracker - The Ultimate Budgeting Tool for Pet Owners

[![GitHub Pages](https://img.shields.io/badge/Deploy%20on-GitHub%20Pages-informational?style=flat-square&logo=github)](https://pages.github.com/)
[![Netlify](https://img.shields.io/badge/Deploy%20on-Netlify-00C7B7?style=flat-square&logo=netlify)](https://www.netlify.com/)
[![Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-MVP%20Ready-brightgreen.svg)]()

---

## 💡 Project Overview

The **Pet Expense Tracker** is a simple, zero-setup web application designed to help pet owners easily manage and track all their pet-related spending.

This project is built as a **Minimum Viable Product (MVP)**, following a strategic **Two-Stage Development** plan:

1.  **Stage 1 (Current)**: A free, fully functional, client-side application to validate the idea, gather user feedback, and build an initial audience.
2.  **Stage 2 (Future)**: A premium, subscription-based version with advanced features like cloud sync, user authentication, and multi-pet support.

The app is built with pure **HTML, CSS, and vanilla JavaScript**, making it incredibly lightweight, fast, and easy to deploy on any static hosting platform.

---

## ✨ Key Features (MVP)

The application is organized into three main, interactive tabs:

### 1. Dashboard 📊

*   **Total Monthly Spending**: A clear, prominent display of total expenses for the current month.
*   **Category Breakdown**: Visual cards showing exactly where your money is going (Food, Vet Bills, etc.).
*   **Recent Expenses**: A quick-view list of the last few transactions.

### 2. Add Expense ➕

*   **Simple Input Form**: Fast and intuitive form to log a new expense.
*   **Predefined Categories**: Select from 8 common pet expense categories for easy classification.
*   **Date Picker**: Automatically defaults to today's date.
*   **Notes Field**: Optional field for adding context (e.g., "Annual checkup," "New toy").

### 3. History 📋

*   **Complete Expense Log**: A scrollable list of every expense ever recorded.
*   **Category Filter**: Quickly filter the list to see spending in specific areas.
*   **Delete Functionality**: Easily remove incorrect or outdated entries.

---

## 🎨 Design & User Experience

The application adheres to a modern, professional, and clean aesthetic:

| Design Element | Specification |
| :--- | :--- |
| **Theme** | **Dark Mode** with a deep `#161616` background. |
| **Accent Color** | **Bright Lime Green** (`#acf92c`) for buttons and highlights, ensuring high contrast. |
| **Typography** | **Montserrat** font family for a clean, modern look. |
| **Aesthetics** | Apple-style design with rounded corners, subtle shadows, and smooth hover effects. |
| **Responsiveness** | Fully optimized for seamless use on **desktop, tablet, and mobile** devices. |

---

## 🛠️ Technical Stack

This project is intentionally built with simplicity and speed in mind.

*   **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Data Storage**: Browser's `localStorage` API (No backend server required for the MVP)
*   **Dependencies**: None (Zero external libraries or frameworks)

### Project Structure

```
pet-expense-tracker/
├── index.html          # Main application page
├── css/
│   └── styles.css      # All styling for the dark theme UI
├── js/
│   └── app.js          # Core ExpenseTracker class and logic
├── README.md           # This file
├── DEPLOYMENT.md       # (Deprecated - content merged into this README)
├── netlify.toml        # Configuration file for Netlify deployment
└── .gitignore          # Files to ignore for Git
```

---

## 🚀 Deployment Guide

The Pet Expense Tracker is a static site and can be deployed to any static hosting service.

### Recommended Deployment Method: GitHub Pages (Simplest)

This method is the easiest way to get a live URL and requires no separate hosting account.

1.  **Create a New Repository**: On your GitHub account, create a new public repository (e.g., `pet-expense-tracker`).
2.  **Upload Files**: Upload all the project files (HTML, CSS, JS folders, and all root files) to the `main` branch of this repository.
3.  **Enable Pages**:
    *   Go to your repository's **Settings** tab.
    *   Navigate to the **Pages** section.
    *   Under "Source," select the `main` branch and the `/ (root)` folder.
    *   Click **Save**.
4.  **Live URL**: Your app will be live within a few minutes at a URL like:
    `https://YOUR_USERNAME.github.io/pet-expense-tracker/`

### Alternative Deployment: Netlify (Recommended for Continuous Integration)

Netlify's free tier is generous and offers automatic deployment on every commit.

1.  **Push to GitHub**: Ensure your project is on GitHub (Step 1 above).
2.  **Connect to Netlify**:
    *   Log in to [Netlify](https://app.netlify.com/).
    *   Click **"Add new site"** -> **"Import an existing project"**.
    *   Connect to GitHub and select the `pet-expense-tracker` repository.
3.  **Configure Build**:
    *   **Build command**: Leave empty (static site).
    *   **Publish directory**: `.` (root directory).
    *   Click **Deploy site**.

---

## 💰 Monetization Strategy (Stage 2 Roadmap)

This MVP is designed to be a foundation for a profitable application.

### Stage 1 (Current) Monetization:

*   **Affiliate Marketing**: Integrate targeted affiliate links for pet products (food, insurance, toys) within the dashboard or history view.
*   **Google AdSense**: Place non-intrusive banner ads to generate passive income.

### Stage 2 (Future) Premium Features:

Once the app has a solid user base, the following features will justify a subscription fee (e.g., $29/month, as per the original plan):

| Feature | Justification for Premium |
| :--- | :--- |
| **Cloud Sync & Auth** | Securely sync data across multiple devices and provide user accounts. |
| **Multi-Pet Support** | Track expenses for multiple pets separately. |
| **Advanced Reporting** | Generate monthly/annual reports, charts, and data export (CSV/PDF). |
| **Budgeting Tools** | Set spending limits and receive automated budget alerts. |
| **Ad-Free Experience** | Remove all advertisements for paying users. |

---

## ❓ Troubleshooting & Support

If you encounter any issues after deployment:

1.  **Check Browser Console**: Press F12 and look for any red error messages in the Console tab.
2.  **Clear Cache**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R).
3.  **Verify Paths**: Ensure that the file paths in `index.html` (`css/styles.css` and `js/app.js`) are correct relative to the root folder.

For platform-specific support, please consult the official documentation for GitHub Pages, Netlify, or Vercel.

---

## ✅ Testing Summary

The application has been thoroughly tested and all core features are confirmed working:

*   **Data Persistence**: Confirmed via `localStorage`.
*   **Calculations**: Total spending and category breakdown are accurate.
*   **Responsiveness**: Layout adapts correctly to mobile and desktop viewports.
*   **User Flow**: Adding, viewing, filtering, and deleting expenses work seamlessly.

This MVP is **production-ready** and waiting for its audience!

