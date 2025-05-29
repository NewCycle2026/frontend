// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import TopMenuBar from "./components/TopMenuBar";
import TopScrollMoving from "./components/TopScrollMoving";
import WebRouter from "./router/WebRouter";

export default function App() {
  return (
    <BrowserRouter>
      <TopScrollMoving />
      <TopMenuBar />
      <div className="h-[40px] md:h-[50px]" />
      <WebRouter />
    </BrowserRouter>
  );
}
