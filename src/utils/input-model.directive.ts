import { FieldConfig } from "@models";
import { createRenderEffect } from "solid-js";
import { debounce } from "./debounce";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            model: [() => any, (v: any) => any, 'string' | 'number', FieldConfig?];
        }
    }
}

export function inputModel(el, value) {
    const [field, setField, type, config] = value();
    createRenderEffect(() => (el.value = field()));
    const handleInputValue = (e) => {
        switch (type) {
            case 'string':
                setField(e.target.value);
                break;
            case 'number':
                let intValue = e.target.value === '' ? 1 : parseInt(e.target.value);
                if (intValue < config.minValue) {
                    intValue = config.minValue;
                } else if (intValue > config.maxValue) {
                    intValue = config.maxValue;
                }
                setField(intValue);
                break;
        }    
    }
    el.addEventListener("input", debounce(handleInputValue));
}