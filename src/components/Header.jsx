import { useState } from "react";

const links = [
  { label: "Filmes", href: "#filmes" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <a className="logo" href="#inicio" aria-label="MovieCity, início">
        Movie<span>City</span><i>.</i>
      </a>

      <nav className={`navigation ${menuOpen ? "open" : ""}`} aria-label="Menu principal">
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="login-button" type="button" onClick={() => alert("Área de login em desenvolvimento.")}>
          Entrar
        </button>
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}