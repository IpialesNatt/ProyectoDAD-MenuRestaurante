import './Header.css';

function Header({ name, slogan }) {
  return (
    <header className="header">
      <h1 className="restaurant-name">{name}</h1>
      <p className="restaurant-slogan">{slogan}</p>
    </header>
  );
}

export default Header;

