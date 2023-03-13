import { useAppContext } from "@state";
import { createSignal, onCleanup, onMount } from "solid-js";
import './CopyMessage.scss';

export function CopyMessage() {
    const [ isFadeOut, setIsFadeOut ] = createSignal(false);
    const { copyMessage } = useAppContext();

    const timeoutTimer = setTimeout(() => setIsFadeOut(true), 2000);

    onCleanup(() => clearTimeout(timeoutTimer));

    return <div class="copy-message-container" classList={{ 'fade-out': isFadeOut() }}>
        { copyMessage() }
    </div>
}