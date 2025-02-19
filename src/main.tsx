import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SharedStyle from "./components/shared-style.tsx";
import styleCss from "@harnessio/ui/styles.css?inline";

// const style1 = `
// button { background-color: blue; color: white; }
// p { font-size: 16px; color: red; }
// `;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <SharedStyle styleId="custom-style" styleAsString={styleCss} />
  </StrictMode>
);
