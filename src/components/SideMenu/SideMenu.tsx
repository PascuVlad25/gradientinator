import { createSignal, onMount } from "solid-js";
import { GradientControls } from "../GradientControls/GradientControls";
import { WallpaperControls } from "../WallpaperControls/WallpaperControls";
import "./SideMenu.scss";

export function SideMenu() {
    const [ isMenuOpen, setIsMenuOpen ] = createSignal(false);  

    onMount(() => {
        if (window.screen.width > 600) {
            setIsMenuOpen(true);
        }
    })

    return <div class="sidemenu-container" classList={{ 'opened': isMenuOpen() }}>
        <h1 class="main-title">
            <div class="small-text">
                <span class="the">The</span>
            </div>
            Gradientinator
        </h1>
        <GradientControls />
        <WallpaperControls />
        <div class="buttons-container">
            <button class="mobile-button action-button" onClick={() => setIsMenuOpen(false)}>Apply Gradient</button>
            <button class="desktop-hide-menu-button action-button" onClick={() => setIsMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                Hide Settings
            </button>
        </div>
        <button class="mobile-open-button" onClick={() => setIsMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </button>
    </div>
}
