import "./footer.css";
import { House, Search, SquarePlus, Film, User } from "lucide-react";

function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <House className="col-2 " width={40} height={40} />
        <Search className="col-2 " width={40} height={40} />
        <SquarePlus className="col-2 " width={40} height={40} />
        <Film className="col-2 " width={40} height={40} />
        <User className="col-2 " width={40} height={40} />
      </div>
    </footer>
  );
}

export default Footer;
