import dayjs from "dayjs";
import "./styles.css";
import "dayjs/locale/pt";
import { useEffect, useState } from "react";
import { getDatesBetween } from "./utils/functions";
import InputData from "./components/InputData/InputData";
import DaysComponents from "./components/DaysItems/DaysItems";
import Results from "./components/Results/Results";
import Background from "./components/Background/Background";

export default function App() {

  const [selected, setSelected] = useState<number[]>([]);

  const [arrDays, setArrDays] = useState<string[]>([]);

  const [startDate, setStartDate] = useState<string>(
    dayjs().format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState<string>(
    dayjs().add(7, "days").format("YYYY-MM-DD")
  );


  useEffect(() => {
    if (startDate && endDate) setArrDays(getDatesBetween(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <Background>
      <div className="App">
        <InputData startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <br />
        <DaysComponents selected={selected} setSelected={setSelected} />
        <br />
        <Results arrDays={arrDays} selected={selected} />
      </div>
    </Background>
  );
}
