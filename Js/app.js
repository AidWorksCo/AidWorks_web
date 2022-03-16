import { menu } from "./menu.js";
import { slider } from "./slider.js";

const d = document;


d.addEventListener('DOMContentLoaded', e=>{
  menu('.menu','.bars','.close');  
  slider();
});