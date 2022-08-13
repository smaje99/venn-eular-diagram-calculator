import 'normalize.css';
import './style.css';

import { calculatorSets } from './calculator';
import { validateTotalityInput } from './validate/validate-input';
import { $ } from './utils/dom';

const notABCElement = $('#elementsNotABC');
const sampleElement = $('#sample');
const calculatorElement = $('#calculator__diagram');

notABCElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

sampleElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

calculatorElement.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(document.calculator);
    const results = calculatorSets(data);
});