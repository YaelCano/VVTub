import { SearchAll } from "./get.js";
document.querySelector("#chartSearch").addEventListener("change",(e)=>{
    SearchAll(e.target.value)
});