import React, { useEffect, useState } from "react"
import { FinalItem, ResultsProps } from "../../utils/interfaces"
import { formatDataToFinal } from "../../utils/functions";
import DayItem from "../DaysItems/DayItem/DayItem";

const Results: React.FC<ResultsProps> = ({ arrDays, selected }) => {
    const [finalArr, setFinalArr] = useState<FinalItem[]>([]);

    useEffect(() => {
        if (arrDays && selected && Array.isArray(selected))
            setFinalArr(formatDataToFinal(arrDays, selected));
    }, [arrDays, selected]);

    return (
        <div>
            {finalArr && Array.isArray(finalArr)
                ? finalArr.map((item: FinalItem, index: number) => <DayItem index={index} item={item} />)
                : null}
        </div>
    )
}

export default Results