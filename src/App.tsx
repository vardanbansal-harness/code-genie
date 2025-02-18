import "./App.css";
import { Button } from "@harnessio/ui/components";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Button variant="default" onClick={() => alert("clicked")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
