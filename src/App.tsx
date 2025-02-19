import "./App.css";
import ShadowWrapper from "./components/shadow-wrapper";
import { SharedStyle } from "./components/shared-style";

// import { Button } from "@harnessio/ui/components";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* <Button variant="default" onClick={() => alert("clicked")}>
        Click me
      </Button> */}
      <ShadowWrapper>
        <SharedStyle
          styleId="text-color-red"
          styleAsString={`p { color: red; }`}
        />
        <p>Hello World!</p>
      </ShadowWrapper>
      <ShadowWrapper>
        <SharedStyle styleId="text-color-red" />
        <p>Hello World!</p>
      </ShadowWrapper>
    </div>
  );
}

export default App;
