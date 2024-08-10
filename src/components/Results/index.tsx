import React from "react"
import { FinalItem } from "../../utils/interfaces"

interface ResultsProps {
    finalArr: FinalItem[];
}

const Results: React.FC<ResultsProps> = ({ finalArr }) => {

    return (
        <div>
            {finalArr && Array.isArray(finalArr)
                ? finalArr.map((item: FinalItem, index: number) => (
                    <>
                        <h3>{item.day}</h3>
                        <button type="button" onClick={() => console.log(item)}>
                            {index}
                        </button>
                    </>
                ))
                : null}
        </div>
    )
}

export default Results