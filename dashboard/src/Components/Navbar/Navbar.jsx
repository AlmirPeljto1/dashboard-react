import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="wrapperNavbar">
      <div className="podrska">
        <img src="\img\questionmark.svg" alt="" className="podrskaImg" />
        <span className="podrskaTitle">Podrška</span>
      </div>
      <div className="Korisnik">
        <img src="\img\Group (2).svg" alt="img" className="KorisnikImg" />
        <span className="KorisnikTitle">Korisnik</span>
        <img src="\img\Path 696.svg" alt="svg" className="KorisnikSvg" />
        <div className="korisnikDrop">
          <div className="dropItem1">
            <img src="\img\Group (2).svg" alt="img" className="dropImg1" />
            <span className="dropSpan1">Postavke profila</span>
          </div>
          <div className="dropItem2">
            <img src="\img\Settings.svg" alt="img" className="dropImg2" />
            <span className="dropSpan2">Postavke</span>
          </div>
          <div className="dropItem3">
            <img src="\img\Path 617.svg" alt="img" className="dropImg3" />
            <span className="dropSpan3">Odjava</span>
          </div>
        </div>
      </div>
      <div className="navDashboard">
        <img
          src="\img\Dashboard (1).svg"
          alt="img"
          className="navDashboardImg"
        />
        <span className="navDashboardTitle">Dashboard</span>
        <img src="\img\Path 696.svg" alt="svg" className="navDashboardSvg" />
      </div>
      <div className="navLine"></div>
      <div className="navLine2"></div>
    </div>
  );
};
