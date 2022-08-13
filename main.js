import 'normalize.css';
import './style.css';
import { buildDiagram } from './diagram';

import { validateTotalityInput } from './validate/validate-input';
import { $ } from './utils/dom';

const notABCElement = $('#elementsNotABC');
const sampleElement = $('#sample');
const diagramElement = $('#canvas');

notABCElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

sampleElement.addEventListener('input', () => (
    validateTotalityInput(notABCElement, sampleElement)
));

buildDiagram(diagramElement);