import "./App.css";
import ShadowWrapper from "./components/shadow-wrapper";
import { Button } from "@harnessio/ui/components";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <ShadowWrapper>
        <Button variant="destructive" onClick={() => alert("clicked")}>
          Click me
        </Button>
      </ShadowWrapper>
      <ShadowWrapper>
        <Button variant="secondary" onClick={() => alert("clicked")}>
          Click me
        </Button>
      </ShadowWrapper>
      <ShadowWrapper>
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
