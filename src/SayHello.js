import { mount } from "svelte";
// @ts-ignore
import SayHello from "./lib/SayHello.svelte";
const app = mount(SayHello, {
    target : document.getElementById('app')
});

export default app;