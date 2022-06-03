import { Document } from "../Components/Document/Document.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import { Navbar1 } from "../Components/Navbar/Navbar1.jsx";
import { Sidebar1 } from "../Components/Sidebar/Sidebar1.jsx";
import "./Documents.css";

export default function Documents() {
  return (
    <div className="documentHome">
      <Sidebar1 />
      <Navbar1 />
      <Document />
      <Footer />
    </div>
  );
}
