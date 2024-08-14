import dayjs from "dayjs";
import { FinalItem } from "./interfaces";

export const getDatesBetween = (startStr: string, endStr: string) => {
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

export const formatDataToFinal = (arr: string[], selected: number[]) => {
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

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)