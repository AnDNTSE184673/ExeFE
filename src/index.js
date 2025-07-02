
import App from "App";
import ReactDOM from "react-dom/client";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  
);
