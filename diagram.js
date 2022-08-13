import { $ } from './utils/dom';

// setup
const dataDefault = ChartVenn.extractSets([
    { label:'A', values:[] },
    { label:'B', values:[] },
    { label:'C', values:[] }
])

const borderColor = [
    'rgba(255, 26, 104, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(0, 0, 0, 1)'
]

// config
let config = {
    type: 'venn',
    data: dataDefault,
    options: {
        borderColor
    }
};

const setBackgroundColor = (backgroundColor) => {
    config = { options: { borderColor, backgroundColor } , ...config}
    buildDiagram($('#myChart'))
}


export function buildDiagram(canvas){
    const ctx = canvas.getContext('2d');
    return new Chart(ctx, config);
}

export const AUnionB = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}

export const AUnionC = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}