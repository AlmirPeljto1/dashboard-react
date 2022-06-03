import "./Status.css";

export const Status = ({ setStatus, status }) => {
  return (
    <div className="basicWrapper" onClick={(e) => setStatus(!status)}>
      <h3 className="basicTitle">Trenutno aktivni paket:</h3>
      <div className="basicPaket">
        <span className="basicPaketTitle">BASIC</span>
      </div>
      <div className="hr"></div>
      <h3 className="basicQuestion">Želite Busines paket?</h3>
      <div className="basicInfo1">
        <img src="\img\Group 2749.svg" alt="" className="basicInfoImg1" />
        <span className="basicInfoTitle1">Napredni dashboard/statistika</span>
      </div>
      <div className="basicInfo2">
        <img src="\img\Group 2749.svg" alt="" className="basicInfoImg2" />
        <span className="basicInfoTitle2">Neograničen broj poslovnica</span>
      </div>
      <div className="basicInfo3">
        <img src="\img\Group 2749.svg" alt="" className="basicInfoImg3" />
        <span className="basicInfoTitle3">Ankete, baneri i još puno toga!</span>
      </div>
      <div className="basicUp">
        <span className="basicUpTitle">Nadogradi</span>
        <img src="\img\Prijava.svg" alt="" className="basicUpImg" />
      </div>
    </div>
  );
};
