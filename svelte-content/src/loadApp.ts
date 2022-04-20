import App from "./App.svelte";

const mount = (el: HTMLElement) => {
  new App({
    target: el,
  });
};

export { mount };
