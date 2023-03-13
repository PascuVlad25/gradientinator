import { useAppContext } from '@state';
import './WallpaperPopup.scss';

export function WallpaperPopup() {
    const { setIsPopupOpen, wallpaperData } = useAppContext();

    return <div class="popup-container">
        <div class="popup">
            <button onClick={() => setIsPopupOpen(false)} class="close-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
            </button>
            <div class="wallpaper-container">
                <img src={wallpaperData()} />
            </div>
            <a class="action-button" href={wallpaperData()} download="gradientinator.jpeg">Save Wallpaper</a>
        </div>
        <div onClick={() => setIsPopupOpen(false)} class="popup-overlay"></div>
    </div>
}
