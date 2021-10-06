import { ReactNode } from "react";

export interface Props {
    title: string;
    titleSuffix?: string;
    children?: ReactNode;
}