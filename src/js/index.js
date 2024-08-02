import { Laze } from './laze.js';

const refs = {
  controlsForm: document.querySelector('.js-control-elements'),
  canvas: document.querySelector('.js-canvas'),
  generateBtn: document.querySelector('.js-generate-btn'),
  saveBtn: document.querySelector('.js-save-btn'),
};

const LAZE_LEN = 25;
const laze = new Laze(LAZE_LEN, LAZE_LEN, refs.canvas);

refs.controlsForm.addEventListener('submit', e => {
  e.preventDefault();
  const lazeHeight = e.target.elements['laze-height'].value;
  const lazeWidth = e.target.elements['laze-width'].value;

  refs.canvas.height = (+lazeHeight + 1) * laze.blockWidth;
  refs.canvas.width = (+lazeWidth + 1) * laze.blockWidth;
  laze.resetSize(lazeHeight, lazeWidth);
  laze.createLaze();
});

refs.generateBtn.addEventListener('click', e => {
  const form = e.target.closest('form');
  const lazeHeight = form.elements['laze-height'].value;
  const lazeWidth = form.elements['laze-width'].value;

  refs.canvas.height = (+lazeHeight + 1) * laze.blockWidth;
  refs.canvas.width = (+lazeWidth + 1) * laze.blockWidth;

  laze.resetSize(lazeHeight, lazeWidth);
  laze.createLaze(true);
});

refs.saveBtn.addEventListener('click', () => {
  const dataURL = refs.canvas.toDataURL('image/png');
  const newTab = window.open('about:blank', 'image from canvas');
  newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
});
