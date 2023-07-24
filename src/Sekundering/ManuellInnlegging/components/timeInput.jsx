import React, { useEffect, useState } from "react";

function TimeInputWithSeconds({ løperData, setLøperData, index }) {
  const [timer, setTimer] = useState(0);
  const [minutter, setMinutter] = useState(0);
  const [sekunder, setSekunder] = useState(0);

  const handleLøperInputChange = (index, field, value) => {
    const updatedLøperData = { ...løperData };
    updatedLøperData[index] = {
      ...updatedLøperData[index],
      [field]: value,
    };
    setLøperData(updatedLøperData);
  };

  useEffect(() => {
    const nyStarttid = timer + ":" + minutter + ":" + sekunder;
    handleLøperInputChange(index, "starttid", nyStarttid);
  }, [timer, minutter, sekunder]);

  const handleChangeTimer = (event) => {
    setTimer(event.target.value);
  };

  const handleChangeMinutter = (event) => {
    setMinutter(event.target.value);
  };

  const handleChangeSekunder = (event) => {
    setSekunder(event.target.value);
  };

  const options = [];
  for (let i = 0; i <= 59; i++) {
    const formattedValue = i < 10 ? `0${i}` : i.toString();
    options.push(
      <option key={i} value={i}>
        {formattedValue}
      </option>
    );
  }

  return (
    <div>
      <table className="number-input-container">
        <tbody>
          <tr>
            <th className="td-select">Timer</th>
            <th className="td-select">Minutter</th>
            <th className="td-select">Sekunder</th>
          </tr>
          <tr>
            <td className="td-select">
              <select
                className="number-input"
                value={timer}
                onChange={handleChangeTimer}
              >
                {options}
              </select>
            </td>
            <td className="td-select">
              <select
                className="number-input"
                value={minutter}
                onChange={handleChangeMinutter}
              >
                {options}
              </select>
            </td>
            <td className="td-select">
              <select
                className="number-input"
                value={sekunder}
                onChange={handleChangeSekunder}
              >
                {options}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimeInputWithSeconds;
