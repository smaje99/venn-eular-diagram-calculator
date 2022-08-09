import 'normalize.css';
import './style.css';

import { validateTotalityInput } from './validate/validate-input';
import { $ } from './utils/dom';

const notABCElement = $('#elementsNotABC');
const sampleElement = $('#sample');

notABCElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

sampleElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));