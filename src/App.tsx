import "./App.css";
import { ShadCNWrapper } from "./components/shadcn-wrapper";
import ShadowWrapper from "./components/shadow-wrapper";
import { Button } from "@harnessio/ui/components";

function App() {
  return (
    <div>
      {/* <ShadowWrapper> */}
      <ShadCNWrapper>
        <Button variant="destructive" onClick={() => alert("Deleted")}>
          Delete
        </Button>
      </ShadCNWrapper>
      {/* </ShadowWrapper> */}
      <ShadowWrapper>
        <div className="p-2">
          <Button variant="secondary" onClick={() => alert("Cancelled")}>
            Cancel
          </Button>
        </div>
      </ShadowWrapper>
      <ShadowWrapper>
        <h1>Sample header</h1>
      </ShadowWrapper>
      <ShadowWrapper>
        <p>Second paragraph</p>
        <span>Sample text</span>
      </ShadowWrapper>
    </div>
  );
}

export default App;
