import { DayItemProps } from "../../../utils/interfaces";

const DayItem: React.FC<DayItemProps> = ({ item, index }) => {
    return (
        <>
            <h3>{item.day}</h3>
            <button type="button" onClick={() => console.log(item)}>
                {index}
            </button>
        </>
    );
};

export default DayItem;
