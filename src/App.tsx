import dayjs from "dayjs";
import "./styles.css";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt";
import { useEffect, useState } from "react";

export default function App() {
  dayjs.locale("pt");
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
  dayjs.extend(weekday);

  const [selected, setSelected] = useState([]);

  const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(
    dayjs().add(7, "days").format("YYYY-MM-DD")
  );

  const [arrDays, setArrDays] = useState(null);
  const [finalArr, setFinalArr] = useState(null);

  const formatDataToFinal = (arr: Array<[]>) => {
    return arr
      .map((day) => {
        if (selected.includes(dayjs(day, "DD-MM-YYYY").day())) {
          return {
            day,
            weekIndex: dayjs(day, "DD-MM-YYYY").day(),
            name: dayjs(day, "DD-MM-YYYY").format("dddd"),
          };
        } else {
          return undefined;
        }
      })
      .filter((item) => item != undefined)
      .sort((a, b) => a?.weekIndex - b?.weekIndex);
  };

  const getDatesBetween = (startStr: string, endStr: string) => {
    const startDate = dayjs(startStr, "YYYY-MM-DD");
    const endDate = dayjs(endStr, "YYYY-MM-DD");

    if (startDate.isAfter(endDate)) {
      console.error("Start date must be before end date.");
      return [];
    }

    let datesArray = [];

    let current = startDate;
    while (!current.isAfter(endDate)) {
      datesArray.push(current.format("DD-MM-YYYY"));
      current = current.add(1, "day");
    }

    return datesArray;
  };

  useEffect(() => {
    if (startDate && endDate) setArrDays(getDatesBetween(startDate, endDate));
  }, [startDate, endDate]);

  useEffect(() => {
    if (arrDays) setFinalArr(formatDataToFinal(arrDays));
  }, [arrDays, selected]);

  return (
    <div className="App">
      <label>
        Start:
        <input
          id={"start"}
          type={"date"}
          placeholder={"start date MEH"}
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          max={endDate}
        />
      </label>
      <br />
      <label>
        End:
        <input
          id={"end"}
          type={"date"}
          placeholder={"end date MEH"}
          onChange={(e) => setEndDate(e.target.value)}
          min={startDate}
          value={endDate}
        />
      </label>
      <br />
      {[0, 1, 2, 3, 4, 5, 6].map((num) => (
        <label>
          {dayjs().day(num).format("ddd")}
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => {
              if (selected.includes(num)) {
                setSelected([...selected].filter((item) => item != num));
              } else {
                setSelected([...selected, num]);
              }
            }}
            checked={selected.includes(num)}
          />
        </label>
      ))}
      <br />
      <div>
        {finalArr && Array.isArray(finalArr)
          ? finalArr.map((item, index) => (
              <h3>
                {index} - {item.day}
              </h3>
            ))
          : null}
      </div>
    </div>
  );
}
