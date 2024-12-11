import { atom, onMount } from "nanostores";

export const $theme = atom("light");

onMount($theme, () => {
  // Mount mode
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    $theme.set(localStorage.getItem("theme") ?? "light");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $theme.set("dark");
  } else {
    $theme.set("light");
  }

  return () => {
    // Disabled mode
  };
});
