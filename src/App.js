import "./App.css";
import { AllocationProvider } from "./context/AllocationContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AllocationProvider>
      <AppRouter />
    </AllocationProvider>
  );
}

export default App;
