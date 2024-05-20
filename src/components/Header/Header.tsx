import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = ({ isAuth, setIsAuth }: { isAuth: boolean; setIsAuth: (val: boolean) => void }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const authButton = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      <div className="header">
        <NavLink className="link" to="/">
          Главная
        </NavLink>
        <NavLink className="link" to="/catalog">
          Каталог
        </NavLink>
        {isAuth ? (
          <NavLink className="link" to="/profile">
            Профиль
          </NavLink>
        ) : (
          ""
        )}
        <NavLink className="link" to="form">
          Форма
        </NavLink>
        <button onClick={authButton}>{isAuth ? "Выйти" : "Войти"}</button>
        {isAuth && <button className="my_name">Кретинина Татьяна Сергеевна 221-322</button>}
        <button className="switch-theme" onClick={changeTheme}>
          Сменить тему на {theme == "dark" ? "светлую" : "темную"}
        </button>
      </div>
    </>
  );
};

export default Header;
