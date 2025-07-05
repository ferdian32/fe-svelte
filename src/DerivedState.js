import { mount } from "svelte";
// @ts-ignore
import Derived from "./lib/Derived.svelte";
const app = mount(Derived, {
  target: document.getElementById("app"),
});

export default app;
