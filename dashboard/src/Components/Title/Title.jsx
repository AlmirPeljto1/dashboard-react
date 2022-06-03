import "./Title.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
export const Title = () => {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const [pocevsi, setPocevsi] = useState(false);
  const [zakljuceno, setZakljuceno] = useState(false);
  const date = value.toLocaleDateString();
  const date1 = value1.toLocaleDateString();
  return (
    <div>
      <h1 className="dashTitle">Dashboard statistics</h1>
      <div className="dashKalendar">
        <span className="dashSpan">Ovaj mjesec</span>
        <img src="\img\Path 695.svg" alt="img" className="dashImg" />
        <div className="dropkalendar">
          <span className="kalendarSpan1">Danas</span>
          <div className="focus">
            <span className="kalendarSpan2">Ovaj mjesec</span>
          </div>
          <span className="kalendarSpan3">Ova godina</span>
          <span className="kalendarSpan4">Ova sedmica</span>
          <span className="kalendarSpan5">Prošli mjesec</span>
          <span className="kalendarSpan6">Prošla godina</span>
          <div className="kalendarLine"></div>
          <div className="kalendarOption1">
            <span className="kalendarTitle1">Počevši od</span>
            <span
              className="kalendarDate1"
              onClick={() => setPocevsi(!pocevsi)}
            >
              {date}
            </span>
          </div>
          <div className="kalendarOption2">
            <span className="kalendarTitle2">Zaključeno sa</span>
            <span
              className="kalendarDate2"
              onClick={() => setZakljuceno(!zakljuceno)}
            >
              {date1}
            </span>
          </div>
          <div className="potvrda">
            <span className="potvrdaSpan">Primijeni</span>
          </div>
          <div className="odbiti">
            <span className="odbitiSpan">Poništi</span>
          </div>
          {pocevsi ? (
            <div className="calendar">
              <Calendar onChange={onChange} value={value} />
            </div>
          ) : (
            <div></div>
          )}
          {zakljuceno ? (
            <div className="calendar1">
              <Calendar onChange={onChange1} value={value1} />
            </div>
          ) : (
            <div></div>
          )}
          <div className="upozorenje">
            <span className="upozorenjeSpan">
              Dostupno u <span className="spec">Business</span> paketu!
            </span>
          </div>
        </div>
      </div>
      <div className="dashPoslovnica">
        <span className="dashPoslovnicaTitle">Poslovnica X</span>
        <img src="\img\Path 696.svg" alt="img" className="dashPoslovnicaImg" />
      </div>
      <div className="line"></div>
    </div>
  );
};
