import { Link } from "react-router-dom";
import { BrandIdentityAsset } from "../ui/brand-identityasset";
import { LINKS } from "../links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <BrandIdentityAsset asset="logoLockup" />
          <p className="site-footer__tagline">
            Create with friends. Play with the world.
          </p>
        </div>
        <div className="site-footer__cols">
          <div className="site-footer__col">
            <h3>Products</h3>
            <a href={LINKS.studio} target="_blank" rel="noreferrer">
              Wanaka Studio
            </a>
            <a href={LINKS.appStore} target="_blank" rel="noreferrer">
              Wanaka App for iOS
            </a>
          </div>
          <div className="site-footer__col">
            <h3>Community</h3>
            <a href={LINKS.discord} target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
          <div className="site-footer__col">
            <h3>Legal</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Wanaka World. All rights reserved.</span>
      </div>
    </footer>
  );
}
