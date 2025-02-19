import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SharedStyle from "./components/shared-style.tsx";
/** import css as raw string: https://stackoverflow.com/questions/70982306/get-raw-string-value-by-import-with-vite */
import styleCss from "@harnessio/ui/styles.css?inline";

const inlineStyle = `
span { color: red; }
p { font-size: 16px; color: blue; }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SharedStyle styleId="custom-style-1" styleAsString={styleCss} />
    <SharedStyle styleId="custom-style-2" styleAsString={inlineStyle} />
    <App />
  </StrictMode>
);
