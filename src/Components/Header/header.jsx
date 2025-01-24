import { Camera, Send } from "lucide-react";
import "./header.css";
import Stories from "../Stories/Stories";

function Header() {
  return (
    <header className=" container header  p-2 ">
      <div className="row text-center titleContainer ">
        <div className="col-2 align-self-center">
          <Camera width={40} height={40} className=" camera " />
        </div>
        <div className="col-8 ">
          <h1 className="title">FakeInsta</h1>
        </div>
        <div className="col-2 align-self-center">
          <Send width={40} height={40} className="message" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Stories />
        </div>
      </div>
    </header>
  );
}

export default Header;
