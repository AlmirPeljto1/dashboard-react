import "./Sidebar1.css";
import { Link } from "react-router-dom";
export const Sidebar1 = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="/img/Kusur-logo.svg" alt="logo" />
      </div>
      <Link to="/">
        <div className="dashboard1">
          <img
            src="/img/Dashboard.svg"
            alt="dashboardLogo"
            className="dashboardSvg"
          />
          <span className="dashboardTitle">Dashboard</span>
        </div>
      </Link>
      <div className="loyalty">
        <div className="loyaltyMenu">
          <img
            src="/img/loyalty_black_24dp.svg"
            alt="loyaltyImg"
            className="loyaltyImg"
          />
          <span className="loyaltyTitle">Loyalty</span>
          <img
            src="/img/expand_more_black_24dp.svg"
            alt="loyaltyIcon"
            className="loyaltyIcon"
          />
        </div>
      </div>
      <div className="loyaltyItems">
        <span className="kuponi">Kuponi</span>
        <span className="pragovi">Pragovi</span>
        <span className="specKuponi">Specijalni kuponi</span>
        <span className="transakcije">Transakcije</span>
        <span className="lokacije">Lokacije</span>
      </div>
      <div className="proizvodi">
        <div className="proizvodiMenu">
          <img
            src="/img/storefront_black_24dp.svg"
            alt="proizvodiIcon"
            className="proizvodiImg"
          />
          <span className="proizvodiTitle">Proizvodi</span>
          <img
            src="/img/expand_more_black_24dp.svg"
            alt="proizvodiSvg"
            className="proizvodiSvg"
          />
        </div>
        <div className="proizvodiItems">
          <span className="listaProizvoda">Lista proizvoda</span>
          <span className="proizvodiKategorije">Kategorije</span>
        </div>
      </div>
      <div className="sadrzaji">
        <div className="sadrzajiMenu">
          <img
            src="/img/image_black_24dp.svg"
            alt="sadrzajiImg"
            className="sadrzajiImg"
          />
          <span className="sadrzajiTitle">Sadržaji</span>
          <img
            src="/img/expand_more_black_24dp.svg"
            alt="sadrzajiSvg"
            className="sadrzajiSvg"
          />
        </div>
        <div className="sadrzajiItems">
          <span className="listaSadrzaja">Lista sadržaja</span>
          <span className="sadrzajiKategorije">Kategorije</span>
        </div>
      </div>
      <div className="korisniciAplikacije">
        <img
          src="/img/Group.svg"
          alt="img"
          className="korisniciAplikacijeImg"
        />
        <span className="korisniciAplikacijeTitle">Korisnici aplikacije</span>
      </div>
      <div className="notifikacije">
        <img src="/img/Group (1).svg" alt="img" className="notifikacijeImg" />
        <span className="notifikacijeTitle">Notifikacije</span>
      </div>
      <div className="anketa">
        <img src="/img/poll_black_24dp.svg" alt="img" className="anketaImg" />
        <span className="anketaTitle">Anketa</span>
      </div>
      <div className="baneri">
        <img src="/img/image_black_24dp.svg" alt="img" className="baneriImg" />
        <span className="baneriTitle">Baneri</span>
      </div>
      <div className="postavke">
        <img src="/img/Settings.svg" alt="img" className="postavkeImg" />
        <span className="postavkeTitle">Postavke</span>
      </div>
      <div className="dokumenti1">
        <div className="blueWrapper"></div>
        <img src="/img/Group 4474.svg" alt="img" className="dokumentiImg" />
        <span className="dokumentiTitle">Dokumenti</span>
      </div>
    </div>
  );
};
