import React from "react";

export interface FinalItem {
    day: string;
    weekIndex: 0 | 2 | 1 | 3 | 4 | 5 | 6;
    name: string;
}

export interface InputDateProps {
    startDate: string;
    endDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

export interface BackgroundProps {
    children: React.ReactNode;
}

export interface DaysComponentProps {
    selected: number[];
    setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface ResultsProps {
    arrDays: string[];
    selected: number[];
}

export interface InputDateProps {
    startDate: string;
    endDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

export interface DayItemProps {
    item: FinalItem;
    index: number;
}