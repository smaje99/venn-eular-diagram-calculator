import 'normalize.css';
import './style.css';
import { buildDiagram } from './diagram';

import { calculatorSets } from './calculator';
import { validateTotalityInput, validateInputValues } from './validate/validate-input';
import { $, $$ } from './utils/dom';

const notABCElement = $('#elementsNotABC');
const sampleElement = $('#sample');
const calculatorElement = $('#calculator__diagram');
const diagramElement = $('#canvas');
const calculatorInputs = $$('.calculator--container__content--input');
const calculatorSubmitElement = $('#calculator-set-submit')

notABCElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

sampleElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

calculatorElement.addEventListener('submit', e => {
    e.preventDefault();

    if (!validateInputValues(calculatorInputs)) {
        return;
    }

    if (calculatorSubmitElement.value === 'Calcular conjunto') {
        const data = new FormData(document.calculator);
        const results = calculatorSets(data);

        calculatorInputs.forEach(input => input.disabled = true);

        notABCElement.value ||= results.notABC;
        sampleElement.value ||= results.universal;

        calculatorSubmitElement.value = 'Limpiar conjunto';
    } else {
        calculatorInputs.forEach(input => {
            input.value = '';
            input.disabled = false;
        });

        calculatorSubmitElement.value = 'Calcular conjunto';
    }

});

buildDiagram(diagramElement);
