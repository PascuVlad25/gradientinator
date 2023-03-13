import { AccordionItem } from "@enums";
import { createContext, createEffect, createSignal, useContext } from "solid-js";
import { useAppContext } from "./AppContext";

const createControlsContext = () => {
    const defaultRowsNumber = 6;
    const defaultColsNumber = 6;
    const [ numberOfColors, setNumberOfColors ] = createSignal<2 | 4>(4);
    const [ accordionItemOpen, setAccordionItemOpen ] = createSignal<AccordionItem>(AccordionItem.MatrixSettings);

    function accordionItemClicked(item: AccordionItem): void {
        if (accordionItemOpen() === item) {
            setAccordionItemOpen(AccordionItem.None);
            return;
        }        
        setAccordionItemOpen(item);
    }

    const {
        setRowsNumber, setColumnsNumber
    } = useAppContext();

    createEffect(() => {
        if (numberOfColors() === 4) {
            setRowsNumber(defaultRowsNumber);
            setColumnsNumber(defaultColsNumber);
        } else {
            setColumnsNumber(defaultColsNumber);
            setRowsNumber(1);
        }
    });

    return {
        numberOfColors, setNumberOfColors,
        accordionItemOpen, accordionItemClicked
    }
}

type ControlsContextType = ReturnType<typeof createControlsContext>;

const ControlsContext = createContext<ControlsContextType>();

export const useControlsContext = () => useContext(ControlsContext);

export function ControlsContextProvider(props) {
    return (
        <ControlsContext.Provider value={createControlsContext()}>
          {props.children}
        </ControlsContext.Provider>
      );
}