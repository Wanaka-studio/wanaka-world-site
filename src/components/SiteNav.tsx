import { Link, useLocation } from "react-router-dom";
import { BrandIdentityAsset } from "../ui/brand-identityasset";
import { ButtonMedium } from "../ui/button-medium";
import { LINKS } from "../links";

const ANCHORS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#technology", label: "Technology" },
  { href: "#community", label: "Community" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label="Wanaka World home">
          <BrandIdentityAsset asset="logoLockup" />
        </Link>
        <nav className="site-nav__links" aria-label="Primary">
          {ANCHORS.map((a) => (
            <Link
              key={a.href}
              to={onHome ? a.href : `/${a.href}`}
              className="site-nav__link"
            >
              {a.label}
            </Link>
          ))}
        </nav>
        <a href={LINKS.studio} target="_blank" rel="noreferrer">
          <ButtonMedium variant="primary">Launch Studio</ButtonMedium>
        </a>
      </div>
    </header>
  );
}
