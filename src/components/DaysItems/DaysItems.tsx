import dayjs from "dayjs";
import React from "react";
import { DaysComponentProps } from "../../utils/interfaces";

const DaysComponents: React.FC<DaysComponentProps> = ({ selected, setSelected }) => {
    return (
        <>
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
        </>
    )
}

export default DaysComponents