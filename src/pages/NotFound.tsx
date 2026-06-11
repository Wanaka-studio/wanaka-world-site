import { Link } from "react-router-dom";
import { ButtonLarge } from "../ui/button-large";

export default function NotFound() {
  return (
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__msg">Oops! Page not found</p>
      <Link to="/">
        <ButtonLarge variant="primary">Return to Home</ButtonLarge>
      </Link>
    </main>
  );
}
