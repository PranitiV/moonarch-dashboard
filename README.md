# 📊 Moonarch Dashboard

A responsive, modern financial dashboard built with **React**, featuring real-time income data, dynamic charts, and a clean UI layout.

---

## ✨ Features

### 📌 UI/UX & Layout
- **Responsive Layout**: Sidebar and charts adjust based on screen size.
- **Fixed Header**: Remains at the top while navigating the dashboard.
- **Collapsible Sidebar**: Toggleable sidebar with smooth animations.
- **Consistent Theme**: Modern, professional styling using pure CSS.

### 📊 Charts & Data Visualization
- **Multiple Chart Types**: Supports Line, Bar, Area, and Composed charts.
- **Dynamic Chart Selection**: Add new charts from a dropdown menu.
- **Chart Grid Layout**: Responsive arrangement of visual data blocks.

### 📈 Financial Data Integration
- **Real-Time Data**: Fetches quarterly income statements for public companies (currently `AAPL`) using the **RapidAPI Finance API**.
- **Data Table**: Tabular view of all financial data fetched.

### 🧩 Component Structure
- `Header`: App title with toggle, refresh, and profile actions.
- `Sidebar`: Navigation links with icons.
- `Charts`: Central dashboard for visualizations and data.
- `ChartCard`: Modular chart renderer.
- `Table`: Financial data in a scrollable table layout.

### 📤 Export Features
- **CSV Export**: Download all income statement data as a `.csv` file with a single click.

### 📤 ADDITIONAL FEATURE
- **Search Bar and Dynamic rendering**:search for a ticker and see income data related to that company
---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks-based)
- **Styling**: CSS Modules (single file for consistency)
- **Charts**: Recharts (responsive charting library)
- **Data Source**: RapidAPI (Finance Data)
- **Icons**: Lucide React
- **Utilities**: `react-csv` for exporting tabular data

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
1. **Start server**
   ```bash
   npm start
1. **Run locally**
   ```bash
   http://localhost:3000
