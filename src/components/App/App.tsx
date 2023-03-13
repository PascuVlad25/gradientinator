import { Component, Show } from 'solid-js';
import { GradientMatrix, SideMenu, CopyMessage, WallpaperPopup } from '..';
import { ControlsContextProvider, useAppContext } from '@state';
import './App.scss';

export const App: Component = () => {
  const { isCopyMessageVisible, isPopupOpen } = useAppContext();

  return (
    <div class='app-container'>
      <section class='main-section'>
        <ControlsContextProvider>
          <SideMenu />
        </ControlsContextProvider>
        <GradientMatrix />
      </section>
      <Show when={isCopyMessageVisible()}>
        <CopyMessage />
      </Show>
      <Show when={isPopupOpen()}>
        <WallpaperPopup />
      </Show>
    </div>
  );
};
