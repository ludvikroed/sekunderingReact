import React from "react";
import { useNavigate } from "react-router-dom";
import "./renderRenn.css";

function RenderRenn({ renn, dag, isCheckedSøk, isChecked }) {
  const rennArray = Object.entries(renn);
  const navigate = useNavigate();

  const items = rennArray
    .map(([key, value]) => {
      const { id, navn, starttid, sted } = value;
      const start = new Date(starttid);
      const isToday = start.setHours(0, 0, 0, 0) === dag.setHours(0, 0, 0, 0);

      return {
        key,
        id,
        navn,
        starttid,
        sted,
        isToday,
      };
    })
    .sort((a, b) => {
      if (a.isToday && !b.isToday) {
        return -1;
      } else if (!a.isToday && b.isToday) {
        return 1;
      } else {
        return 0;
      }
    })
    .map(({ key, id, navn, starttid, sted, isToday }) => {
      const [year, month, day] = starttid.split("-");
      const formattedStarttid = `${day}-${month}-${year}`;

      return (
        <div key={key} className={`renn${isToday ? " renn-i-dag" : ""}`}>
          <a
            href={`/startliste/${id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/renn/startliste/${id}`);
            }}
          >
            {formattedStarttid}, {sted}
            <p className="navn-på-renn">{navn}</p>
          </a>
        </div>
      );
    });

  return (
    <div className="render-renn" >
      {items}
    </div>
  );
}

export default RenderRenn;
