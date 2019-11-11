import functions from './functions.js';
import {Controller} from './class.js';

const idSpanTotal = document.getElementById('idSpanTotal');
const idSpanNorth = document.getElementById('idSpanNorth');
const idSpanSouth = document.getElementById('idSpanSouth');
const cityInputArr = [
  document.getElementById('idInpName'),
  document.getElementById('idInpLat'),
  document.getElementById('idInpLon'),
  document.getElementById('idInpPop')
];
const idBtnCreate = document.getElementById('IdBtnCreate');
const errorNode = document.getElementById('idDivError');

const controllerInst = new Controller();

const url = 'http://localhost:5000/';

functions.error(false, errorNode);

functions.pull(controllerInst, url);

idBtnCreate.addEventListener('click', (event) => {
  functions.createCity(controllerInst, cityInputArr, url)
});
