# Home Affordability

A simple web app built with Vite and TypeScript to explore home affordability visualization, using tools like Mapbox GL and Turf.js. It is meant to serve as a minimal embed element in consumer blogs.

## Description

This app visualizes US counties and states based on custom numeric data provided in the form of a csv file in src/data/statistics/data.csv. A basic choropleth style accompanied by info popups with ranks and state-county focus and hover interactivity aims to provide the ability to quickly scope the market and compare different areas across the US.

The geodata making up counties comes from the Bureau of Transportation Statistics [dataset](https://geodata.bts.gov/datasets/usdot::counties/about) (data updated July 9, 2024). It has been generalized while preserving polygon topology, and its attributes have been simplified, in order to minimize geojson size downloaded. States were made by dissolving respective county features.

## 📦 Tech

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [@turf/center-of-mass](https://turfjs.org/docs/api/centerOfMass)
- [geobuckets](https://www.npmjs.com/package/geobuckets)
- [Papaparse](https://www.papaparse.com/)

## 🛠️ Setup

### Install dependencies

```bash
npm install
```

### Environment Variables

To use Mapbox, you'll need an access token. Create a `.env` file in the root directory with the following:

```env
VITE_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token_here
```

> ⚠️ Make sure not to commit your `.env` file to version control.

### Custom data

To set up custom tabular data for counties, you can directly manipulate the data.csv file in src/data/statistics. Feel free to add and remove columns as needed, except STATEFP, GEOID, NAME, STATE. The later are used in data joins and map visualization.

You can also select table columns shown, visualization options, and the rank variable used in info popups, in src/main.ts under SETTINGS.

### Run in development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
home-affordability/
├── index.html
├── .env                 # Environment variables (gitignored)
├── src/
│   └── main.ts          # Entry point
│   └── data/
│       └── geo/          # Backbone geographic data for counties and states
│       └── statistics/          # Test data to replace with real statistics
├── package.json
└── tsconfig.json
```

## 📍 Map Feature Checklist

- [x] Table can show any number of data columns
- [x] User can choose which column to show on the map
- [x] Map colors match the selected data column
- [x] User can set up tabs with titles and linked data columns
- [x] Clicking a tab updates map colors based on selected data
- [x] Clicking a state zooms in to that state
  - [x] Click on map
  - [x] Click on table
- [x] County colors reflect selected data when zoomed in
- [x] Table shows top 10 counties in selected state
- [x] Tabs also update data and colors in zoomed-in view
- [x] Clicking outside a state zooms back to full map
- [x] Table always shows top 10 counties for the current view
- [ ] Integrate client styles

---

### 👤 Made by

[Nick Lempesis](https://lempesis.com)
