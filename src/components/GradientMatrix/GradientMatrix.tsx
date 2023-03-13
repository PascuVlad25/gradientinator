import { Index } from "solid-js";
import { useAppContext } from "@state";
import { ColorCell } from "..";
import './GradientMatrix.scss';

export function GradientMatrix() {
    const { 
        rowsNumber,
        columnsNumber,
        generateColor
     } = useAppContext();

    const rows = () => [...new Array(rowsNumber())];
    const columns = () => [...new Array(columnsNumber())];

    return <div id="gradient-matrix" style={{
        'grid-template-columns': `repeat(${columnsNumber()}, 1fr)`,
        'grid-template-rows': `repeat(${rowsNumber()}, 1fr)`
    }}>
        <Index each={rows()}>{(_, rowIndex) => 
            <Index each={columns()}>{(_, colIndex) =>
                <ColorCell color={generateColor(rowIndex, colIndex)}/>
            }</Index>
        }</Index>
    </div>;
}