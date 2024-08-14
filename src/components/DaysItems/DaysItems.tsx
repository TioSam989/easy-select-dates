import dayjs from "dayjs";
import React from "react";
import { DaysComponentProps } from "../../utils/interfaces";
import { capitalizeFirstLetter } from "../../utils/functions";

const DaysComponents: React.FC<DaysComponentProps> = ({ selected, setSelected }) => {

    const weekDays = dayjs.weekdays()

    return (
        <>
            {weekDays.map((name, index) => (
                <label key={index} >
                    {capitalizeFirstLetter(name)}
                    <input
                        type="checkbox"
                        id={`scale-${index}`}
                        name="scales"
                        onClick={() => {
                            if (selected.includes(index)) {
                                setSelected([...selected].filter((item) => +item != +index));
                            } else {
                                setSelected([...selected, index]);
                            }
                        }}
                        checked={selected.includes(index)}
                    />
                </label>
            ))}
        </>
    )
}

export default DaysComponents