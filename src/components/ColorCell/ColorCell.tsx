import { useAppContext } from "@state";
import { Color } from "@models";
import { rgbToHex } from "@utils";
import './ColorCell.scss';

interface CellProps {
    color: Color
}

export function ColorCell(props: CellProps) {
    const { isCopyMessageVisible, setIsCopyMessageVisible, setCopyMessage } = useAppContext();
    const toasterTimeMs = 3000;
    let timeouTimer;

    const copyColorToClipboard = () => {
        const hexColor = rgbToHex(props.color);
        navigator.clipboard.writeText(hexColor);
        showCopyMessage(`Copied ${hexColor}`);
    }

    const showCopyMessage = (message: string) => {
        if (isCopyMessageVisible()) {
            setIsCopyMessageVisible(false);
            clearTimeout(timeouTimer);
        }
        setCopyMessage(message);
        setIsCopyMessageVisible(true);
        timeouTimer = setTimeout(() => {
            setIsCopyMessageVisible(false);
        }, toasterTimeMs);
    }

    return <div onClick={copyColorToClipboard} class="cell" 
        style={{'background-color': `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`}}
    ></div>;
}