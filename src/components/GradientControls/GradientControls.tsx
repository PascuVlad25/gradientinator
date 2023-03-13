import { useAppContext, useControlsContext } from "@state";
import { Show } from "solid-js";
import { RadioField } from "../RadioField/RadioField";
import { inputModel } from "@utils";
import { AccordionItem } from "@enums";
import "./GradientControls.scss";

const model = inputModel;

export function GradientControls() {
    const numberFieldConfig = {
        minValue: 1,
        maxValue: 100
    };
    const {
        rowsNumber, setRowsNumber,
        columnsNumber, setColumnsNumber,
        topLeftColorHex, setTopLeftColorHex,
        topRightColorHex, setTopRightColorHex,
        bottomLeftColorHex, setBottomLeftColorHex,
        bottomRightColorHex, setBottomRightColorHex
    } = useAppContext();
    const { numberOfColors, accordionItemOpen, accordionItemClicked } = useControlsContext();    
    const isOpen = () => accordionItemOpen() === AccordionItem.MatrixSettings;

    return <div class="accordion-item" classList={{ 'open': isOpen() }}>
        <div onClick={() => accordionItemClicked(AccordionItem.MatrixSettings)} class="accordion-item-header">
            <h3 class="accordion-item-title">Settings</h3>
            <svg class="accordion-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
        <Show when={isOpen()}>
            <div class="controls-container accordion-item-content">
                <RadioField />
                <Show when={numberOfColors() === 2}>            
                    <div class="control">
                        <label for="topLeftColor">Left Color:</label>
                        <input name="topLeftColor" type="color" use:model={[topLeftColorHex, setTopLeftColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="topRightColor">Right Color:</label>
                        <input name="topRightColor" type="color" use:model={[topRightColorHex, setTopRightColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="columnsNumber">Columns Number:</label>
                        <input name="columnsNumber" type="number" min={1} max={100} use:model={[columnsNumber, setColumnsNumber, 'number', numberFieldConfig]} />
                    </div>
                </Show>
                <Show when={numberOfColors() === 4}>
                    <div class="control">
                        <label for="topLeftColor">Top Left Color:</label>
                        <input name="topLeftColor" type="color" use:model={[topLeftColorHex, setTopLeftColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="topRightColor">Top Right Color:</label>
                        <input name="topRightColor" type="color" use:model={[topRightColorHex, setTopRightColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="bottomLeftColor">Bottom Left Color:</label>
                        <input name="bottomLeftColor" type="color" use:model={[bottomLeftColorHex, setBottomLeftColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="bottomRightColor">Bottom Right Color:</label>
                        <input name="bottomRightColor" type="color" use:model={[bottomRightColorHex, setBottomRightColorHex, 'string']} />
                    </div>
                    <div class="control">
                        <label for="rowsNumber">Rows Number:</label>
                        <input name="rowsNumber" type="number" min={1} max={100} use:model={[rowsNumber, setRowsNumber, 'number', numberFieldConfig]} />
                    </div>
                    <div class="control">
                        <label for="columnsNumber">Columns Number:</label>
                        <input name="columnsNumber" type="number" min={1} max={100} use:model={[columnsNumber, setColumnsNumber, 'number', numberFieldConfig]} />
                    </div>
                </Show>
            </div>
        </Show>
    </div>
}