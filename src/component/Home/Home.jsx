import Button from "../Buttons/Button.jsx";
import Footer from "../Footer/Footer.jsx";
import GoogleContent from "../GoogleContent/GoogleContent.jsx";
import Header from "../Header/Header.jsx";

export default function Home() {
  return (
    <div className="pe-4  vh-100">
      <Header />
      <GoogleContent />
      <Button/>
      <Footer/>
    </div>
  );
}
