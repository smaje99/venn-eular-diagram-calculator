import 'normalize.css';
import './style.css';

import { calculatorSets, operations } from './calculator';
import { validateTotalityInput, validateInputValues } from './validate/validate-input';
import { $, $$ } from './utils/dom';

const notABCElement = $('#elementsNotABC');
const sampleElement = $('#sample');
const calculatorElement = $('#calculator__diagram');
const calculatorInputs = $$('.calculator--container__content--input');
const calculatorSubmitElement = $('#calculator-set-submit');
const setResults = $$('.set-results');
const operationsElements = $$('.operations');
const resultLabelElement = $('.results__content--label');
const operationElement = $('#operation');
const valuesElement = $('#values');

let data = null;

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
        const formData = new FormData(document.calculator);
        data = calculatorSets(formData);
        setResults.forEach(set => {
            set.innerText = ` = ${data[set.id]}`
        });

        calculatorInputs.forEach(input => input.disabled = true);
        operationsElements.forEach(operation => operation.disabled = false);

        notABCElement.value ||= results.notABC;
        sampleElement.value ||= results.universal;

        calculatorSubmitElement.value = 'Limpiar conjunto';
    } else {
        calculatorInputs.forEach(input => {
            input.value = '';
            input.disabled = false;
        });

        operationsElements.forEach(operation => {
            operation.disabled = true
            operation.checked = false;
        });

        setResults.forEach(set => set.innerText = '');

        data = null;

        calculatorSubmitElement.value = 'Calcular conjunto';
    }
});

operationsElements.forEach(operation => {
    operation.addEventListener('change', e => {
        if (e.target.checked) {
            resultLabelElement.style.visibility = 'visible';
            operationElement.innerText = `${e.target.name}`;
            valuesElement.innerText = `${operations[e.target.id](data)}`;

            operationsElements.forEach(oe => {
                if (oe.id !== e.target.id) {
                    oe.disabled = true
                }
            });
        } else {
            resultLabelElement.style.visibility = 'hidden';
            operationsElements.forEach(oe => oe.disabled = false);
        }
    })
})