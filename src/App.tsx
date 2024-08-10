import dayjs from "dayjs";
import "./styles.css";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt";
import { useEffect, useState } from "react";
import { FinalItem } from "./utils/interfaces";
import Results from "./components/Results";

export default function App() {
  dayjs.locale("pt");
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
  dayjs.extend(weekday);

  const [selected, setSelected] = useState<number[]>([]);

  const [startDate, setStartDate] = useState<string>(
    dayjs().format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState<string>(
    dayjs().add(7, "days").format("YYYY-MM-DD")
  );

  const [arrDays, setArrDays] = useState<string[]>([]);
  const [finalArr, setFinalArr] = useState<FinalItem[]>([]);

  const formatDataToFinal = (arr: string[]) => {
    return arr
      .map((day) => {
        if (selected.includes(dayjs(`${day}`, "DD-MM-YYYY").day())) {
          return {
            day: `${day}`,
            weekIndex: dayjs(`${day}`, "DD-MM-YYYY").day(),
            name: dayjs(`${day}`, "DD-MM-YYYY").format("dddd"),
          };
        } else {
          return null;
        }
      })
      .filter((item): item is FinalItem => item !== null && item !== undefined)
      .sort((a, b) => {
        if (a && b) {
          return a.weekIndex - b.weekIndex;
        }
        return a ? Number.MAX_SAFE_INTEGER : b ? Number.MIN_SAFE_INTEGER : 0;
      });
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
    if (arrDays && selected && Array.isArray(selected))
      setFinalArr(formatDataToFinal(arrDays));
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
                setSelected([...selected].filter((item) => +item != +num));
              } else {
                setSelected([...selected, num]);
              }
            }}
            checked={selected.includes(num)}
          />
        </label>
      ))}
      <br />
      <Results finalArr={finalArr} />
    </div>
  );
}
