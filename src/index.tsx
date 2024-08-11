import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

dayjs.extend(customParseFormat)
dayjs.extend(weekday)
dayjs.extend(localeData)
dayjs.locale('pt')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
