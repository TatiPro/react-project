import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <div className="container">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;
