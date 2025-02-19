import "./App.css";
import ShadowWrapper from "./components/shadow-wrapper";
import SharedStyle from "./components/shared-style";
import { Button } from "@harnessio/ui/components";

function App() {
  const style1 = `
      button { background-color: blue; color: white; }
      p { font-size: 16px; color: red; }
    `;

  const style2 = `
    span { color: yellow; }
    h1 { color: green; }
  `;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <ShadowWrapper>
        <SharedStyle styleId="custom-style-1" styleAsString={style1} />
        <Button variant="secondary" onClick={() => alert("clicked")}>
          Click me
        </Button>
      </ShadowWrapper>
      <ShadowWrapper>
        <SharedStyle styleId="custom-style-2" styleAsString={style2} />
        <h1>First component</h1>
      </ShadowWrapper>
      <ShadowWrapper>
        <p>Second component</p>
        <span>This should reuse style</span>
      </ShadowWrapper>
    </div>
  );
}

export default App;
