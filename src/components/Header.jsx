import Styles from "./Header.module.css";

function Header() {
  return (
    <div className={Styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://aliakbar.ir">Aliakbar</a> | React.js by Vite
      </p>
    </div>
  );
}

export default Header;
