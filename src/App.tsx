import "./App.css";
import ShadowWrapper from "./components/shadow-wrapper";
import SharedStyle from "./components/shared-style";

// import { Button } from "@harnessio/ui/components";

function App() {
  const style = `
      p { font-size: 16px; color: red; }
      span { color: yellow; }
    `;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* <Button variant="default" onClick={() => alert("clicked")}>
        Click me
      </Button> */}
      <ShadowWrapper>
        <SharedStyle styleId="custom-style" styleAsString={style} />
        <p>Hello World!</p>
      </ShadowWrapper>
      <ShadowWrapper>
        <SharedStyle styleId="custom-style" styleAsString={style} />
        <p>42 is the answer to everything...</p>
        <span>Do you know why?</span>
      </ShadowWrapper>
    </div>
  );
}

export default App;
