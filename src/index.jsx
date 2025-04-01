import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Onboarding } from "./screens/Onboarding";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Onboarding />
  </StrictMode>,
);
