


# Angular EChart App

This project demonstrates how to integrate [Apache ECharts](https://echarts.apache.org/) into an Angular application using the `ngx-echarts` library. The app visualizes attendance data in multiple formats and includes a home page with introductory content about the system.



##  Project Setup & ECharts Integration

### 1. Angular Setup

- Created a new Angular standalone project:
  ```bash
  ng new EchartApp --standalone
  ```
- Installed ECharts and `ngx-echarts`:

  ```bash
  npm install echarts ngx-echarts
  ```

### 2. Integration

* Imported `NgxEchartsModule` in the standalone component.
* Used the `echarts` directive in the HTML template.
* Created dynamic chart options using ECharts configuration.

---

##  Components

### `HomeComponent`

**Purpose**: Acts as the landing page for the application.

**Functionality**:

* Displays a brief description of the project.
* Introduces users to the purpose and features of the app.
* Provides a welcoming UI for better user experience.

---

### `EchartComponent`

**Purpose**: Main component responsible for rendering ECharts-based visualizations.

**Key Functionalities**:

* Displays three chart types:

  * Line chart: Overall attendance percentages.
  * Bar chart: Number of present and absent days.
  * Pie chart: Summary of attendance levels (Excellent, Good, Average, Poor).
* A dropdown menu allows users to switch between chart types.
* Uses mocked attendance data via `ChartServicesService`.

---

## 📊 Chart Switching

Users can select chart types from a dropdown:

```html
<select (change)="onChartTypeChange($event)">
  <option value="line">Line</option>
  <option value="bar">Bar</option>
  <option value="pie">Pie</option>
</select>
```

The component dynamically updates the chart configuration (`EChartsOption`) based on the selected type.

---

## ⚠️ Challenges & Solutions

### 1. **Dynamic chart switching**

* **Challenge**: Efficiently switching chart views.
* **Solution**: Used a variable `selectedChart` and pre-defined config options.


---

## 📁 Folder Structure

```
src/
│
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   └── home.component.ts/html/css
│   │   └── echart/
│   │       └── echart.component.ts/html/css
│   ├── services/
│   │   └── chart-services.service.ts
│   └── model/
│       └── data.model.ts
```

---



---

## 🧑‍💻 Author

[Thanzia31](https://github.com/thanzia31)

```

---

Let me know if you want help committing this to your GitHub repo or want to generate a PDF version of this for documentation.
```
