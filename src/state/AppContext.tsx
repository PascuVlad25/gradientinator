import { hexToRGB } from "@utils";
import { Color } from "@models";
import { createContext, createSignal, useContext } from "solid-js";
import { createCanvas } from "canvas";

const createAppContext = () => {
  const [rowsNumber, setRowsNumber] = createSignal(6);
  const [columnsNumber, setColumnsNumber] = createSignal(6);

  const [topLeftColorHex, setTopLeftColorHex] = createSignal('#a18cd1');
  const [topRightColorHex, setTopRightColorHex] = createSignal('#fbc2eb');
  const [bottomLeftColorHex, setBottomLeftColorHex] = createSignal('#96e6a1');
  const [bottomRightColorHex, setBottomRightColorHex] = createSignal('#d4fc79');

  const [copyMessage, setCopyMessage] = createSignal('');
  const [isCopyMessageVisible, setIsCopyMessageVisible] = createSignal(false);
  const [isPopupOpen, setIsPopupOpen] = createSignal(false);

  const [wallpaperWidth, setWallpaperWidth] = createSignal(400);    
  const [wallpaperHeight, setWallpaperHeight] = createSignal(600);
  const [wallpaperData, setWallpaperData] = createSignal('');

  const topLeftColorRGB = () => hexToRGB(topLeftColorHex());
  const topRightColorRGB = () => hexToRGB(topRightColorHex());
  const bottomLeftColorRGB = () => hexToRGB(bottomLeftColorHex());
  const bottomRightColorRGB = () => hexToRGB(bottomRightColorHex());

  function generateColorIntensity(color: 'r' | 'g' | 'b', intensities) {
      return Math.floor((
          topLeftColorRGB()[color] * intensities.topLeftIntensity + 
          topRightColorRGB()[color] * intensities.topRightIntensity +
          bottomLeftColorRGB()[color] * intensities.bottomLeftIntensity +
          bottomRightColorRGB()[color] * intensities.bottomRightIntensity
          ) / intensities.maxIntensity
      );
  }

  function generateColor(rowIndex, colIndex): Color {
      const columnsNumberHandle = () => columnsNumber() === 1 ? 2 : columnsNumber();
      const rowsNumberHandle = () => rowsNumber() === 1 ? 2 : rowsNumber();
      const intensities = {
          topLeftIntensity: (columnsNumberHandle() - colIndex - 1) * (rowsNumberHandle() - rowIndex - 1),
          topRightIntensity: colIndex * (rowsNumberHandle() - rowIndex - 1),
          bottomLeftIntensity: (columnsNumberHandle() - colIndex - 1) * rowIndex,
          bottomRightIntensity: colIndex * rowIndex,
          maxIntensity: (columnsNumberHandle() - 1) * (rowsNumberHandle() - 1),
      }
      const r = generateColorIntensity('r', intensities);
      const g = generateColorIntensity('g', intensities);
      const b = generateColorIntensity('b', intensities);
      return { r, g, b };
  }

  function generateWallpaper(): void {
    const canvas = createCanvas(wallpaperWidth(), wallpaperHeight());
    const ctx = canvas.getContext('2d');

    const rectangleWidth = Math.ceil(wallpaperWidth() / columnsNumber());
    const rectangleHeight = Math.ceil(wallpaperHeight() / rowsNumber());
    for (let rowIndex = 0; rowIndex < rowsNumber(); rowIndex++) {
      for (let columnIndex = 0; columnIndex < columnsNumber(); columnIndex++) {
        const color = generateColor(rowIndex, columnIndex);
        const x = rectangleWidth * columnIndex;
        const y = rectangleHeight * rowIndex;
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fillRect(x, y, rectangleWidth, rectangleHeight);
      }
    }
    const image = canvas.toDataURL('image/jpeg');
    setWallpaperData(image);
  }

  return {
    rowsNumber, setRowsNumber,
    columnsNumber, setColumnsNumber,
    topLeftColorHex, setTopLeftColorHex,
    topRightColorHex, setTopRightColorHex,
    bottomLeftColorHex, setBottomLeftColorHex,
    bottomRightColorHex, setBottomRightColorHex,
    copyMessage, setCopyMessage,
    isCopyMessageVisible, setIsCopyMessageVisible,
    wallpaperWidth, setWallpaperWidth,
    wallpaperHeight, setWallpaperHeight,
    isPopupOpen, setIsPopupOpen,
    wallpaperData,
    generateColor, generateWallpaper
  };
}

type AppContextType = ReturnType<typeof createAppContext>;

const AppContext = createContext<AppContextType>();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider(props) {
    return (
        <AppContext.Provider value={createAppContext()}>
          {props.children}
        </AppContext.Provider>
      );
}