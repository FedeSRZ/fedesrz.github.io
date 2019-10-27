import * as React from "react";
import { match } from "react-router";
interface Props {
    match: match<{
        id: string;
    }>;
}
export declare class ComicViewer extends React.PureComponent<Props> {
    state: {
        paginaActual: number;
        totalPaginas: number;
    };
    paginaAnterior: () => void;
    paginaSiguiente: () => void;
    render(): JSX.Element;
}
export {};
