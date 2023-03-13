import { useControlsContext } from "@state"
import "./RadioField.scss";

export function RadioField() {
    const { numberOfColors, setNumberOfColors } = useControlsContext();

    return <div class="control">
        <label>Number of Colors:</label>
        <div class="radio-control">
            <div>
                <input checked={numberOfColors() === 2} name="colorsNumber" value="2" type="radio" />
                <label onClick={() => setNumberOfColors(2)} for="2">2 Colors</label>
            </div>
            <div>
                <input checked={numberOfColors() === 4}  name="colorsNumber" value="4" type="radio" />
                <label onClick={() => setNumberOfColors(4)} for="4">4 Colors</label>
            </div>
        </div>
    </div>
}