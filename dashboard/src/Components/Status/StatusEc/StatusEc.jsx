import "./StatusEc.css";

export const StatusEc = ({ setStatus, status }) => {
  return (
    <div className="statusEcWrapper" onClick={(e) => setStatus(!status)}>
      <h3 className="statusEcTitle">Trenutno aktivni paket:</h3>
      <div className="statusEcPaket">
        <img src="\img\Economico app.svg" alt="img" className="statusEcImg" />
        <span className="statusEcPaketTitle">BUSINESS</span>
      </div>
      <div className="hr1"></div>
      <span className="statusEcSpan1">Hvala na povjerenju! Kusur tim.</span>
      <span className="statusEcSpan2">
        Paket aktivan do 15. 10 . 2022. 15:38
      </span>
    </div>
  );
};
