import { $ } from './utils/dom';

// setup
const ctx = $('#myChart').getContext('2d');
let chart = null

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
    config = { options: { borderColor, backgroundColor } , ...config};
    buildDiagram();
}

export const cleanData = () => {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

export const setData = (data) => {
    cleanData();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push([
            { sets: ['A'], value: data.onlyA },
            { sets: ['B'], value: data.onlyB },
            { sets: ['C'], value: data.onlyC },
            { sets: ['A', 'B'], value: data.AB },
            { sets: ['A', 'C'], value: data.AC },
            { sets: ['B', 'C'], value: data.BC },
            { sets: ['A', 'B', 'C'], value: data.ABC }
            // { sets: [], value: data.notABC}
        ]);
    });
    chart.update();
}

export function buildDiagram(){
    if (!!chart) {
        chart.destroy();
        ctx.restore();
    }

    ctx.save();
    chart = new Chart(ctx, config);
    ctx.restore();
}

export const AUnionB = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}

export const AUnionC = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}