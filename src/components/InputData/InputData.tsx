import React from "react"
import { InputDateProps } from "../../utils/interfaces"

const InputData: React.FC<InputDateProps> = ({ startDate, endDate, setStartDate, setEndDate }) => {

    return (
        <>
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
        </>
    )
}

export default InputData