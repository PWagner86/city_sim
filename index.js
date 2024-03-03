'use strict';

import Manager from './js/classes/manager.js';

const canvas = document.querySelector('#canvas1');
const CANVASWIDTH = canvas.width = 1000;
const CANVASHEIGHT = canvas.height = 700;
const ctx = canvas.getContext('2d');

const manager = new Manager(canvas);

manager.init();

console.log(ctx)
