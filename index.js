"use strict";

import Manager from "./js/classes/manager.js";

const main = document.querySelector('[data-id="main"]');
const canvas = document.querySelector("#canvas1");
const CANVASWIDTH = (canvas.width = main.clientWidth);
const CANVASHEIGHT = (canvas.height = main.clientHeight);
const ctx = canvas.getContext("2d");

const manager = new Manager(canvas, ctx, main);

window.addEventListener("load", manager.init());
