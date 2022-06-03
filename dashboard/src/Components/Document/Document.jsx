import "./Document.css";
import DownloadIcon from "@mui/icons-material/Download";

export const Document = () => {
  return (
    <div className="document">
      <h1 className="dokumentH1">Dokumenti</h1>
      <span className="doc1">Naziv</span>
      <span className="doc2">Upustva-za-koristenje.pdf</span>
      <span className="doc3">Upustva-za-uposlenike.pdf</span>
      <span className="doc4">Veličina</span>
      <span className="doc5">37.5 KB</span>
      <span className="doc6">1.2 MB</span>
      <DownloadIcon className="icon1" />
      <DownloadIcon className="icon2" />
      <div className="crta"></div>
      <div className="crta1"></div>
    </div>
  );
};
