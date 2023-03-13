import { AccordionItem } from '@enums';
import { FieldConfig } from '@models';
import { useAppContext, useControlsContext } from '@state';
import { inputModel } from '@utils';
import { Show } from 'solid-js';
import './WallpaperControls.scss';

const model = inputModel;

export function WallpaperControls() {
    const numberFieldConfig: FieldConfig = {
        minValue: 10,
        maxValue: 3000
    }
    const {
        wallpaperWidth, setWallpaperWidth,
        wallpaperHeight, setWallpaperHeight,
        setIsPopupOpen, generateWallpaper
    } = useAppContext();

    function createWallpaper(): void {
        generateWallpaper();
        setIsPopupOpen(true);
    }

    const { accordionItemOpen, accordionItemClicked } = useControlsContext();
    const isOpen = () => accordionItemOpen() === AccordionItem.SaveWallpaper;

    return <div class="accordion-item" classList={{ 'open': isOpen() }}>
        <div onClick={() => accordionItemClicked(AccordionItem.SaveWallpaper)} class="accordion-item-header">
            <h3 class="accordion-item-title">Save wallpaper</h3>
            <svg class="accordion-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
        <Show when={isOpen()}>
            <div class="controls-container accordion-item-content">
                <div class="control">
                    <label for="rowsNumber">Wallpaper width (px):</label>
                    <input name="rowsNumber" type="number" min={numberFieldConfig.minValue} max={numberFieldConfig.maxValue} use:model={[wallpaperWidth, setWallpaperWidth, 'number', numberFieldConfig]} />
                </div>
                <div class="control">
                    <label for="columnsNumber">Wallpaper height (px):</label>
                    <input name="columnsNumber" type="number" min={numberFieldConfig.minValue} max={numberFieldConfig.maxValue} use:model={[wallpaperHeight, setWallpaperHeight, 'number', numberFieldConfig]} />
                </div>            
                <button onClick={() => createWallpaper()} class="action-button">Generate wallpaper</button>
            </div>
        </Show>        
    </div>
}