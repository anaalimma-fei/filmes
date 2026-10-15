import Header from "./Header.jsx";
import Main from "./Main.jsx";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <footer className="footer">
        <span className="footer-logo">Movie<span>City</span></span>
        <p>Seu próximo filme favorito está aqui.</p>
        <small>© 2026 MovieCity. Projeto fictício para fins educacionais.</small>
      </footer>
    </div>
  );
}