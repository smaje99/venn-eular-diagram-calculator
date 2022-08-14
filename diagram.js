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


    '#3742fa',
    '#3742fa',
    '#3742fa',
    '#3742fa',
    '#3742fa',
    '#3742fa',
    '#3742fa'

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
    const backgroundColor = [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);
}

export const AUnionC = () => {
    const backgroundColor = [
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);

}

export const BUnionC = () => {
    const backgroundColor = [
    'rgba(255, 255, 255, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);
}

export const AInterB = () => {
    const backgroundColor = [
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);
}

export const AInterC = () => {
    const backgroundColor = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);
}

export const BInterC = () => {
    const backgroundColor = [
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(0, 0, 0, 0.2)'];
    setBackgroundColor(backgroundColor);
}
export const AmenosBunionC = () => {
    const backgroundColor = [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)']
    setBackgroundColor(backgroundColor);
}


export const BmenosAunionC = () => {
    const backgroundColor = [

        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)']
    setBackgroundColor(backgroundColor);
}

export const CmenosAunionB = () => {
    const backgroundColor = [

        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)']
    setBackgroundColor(backgroundColor);
}

export const AunionBunionC = () => {
    const backgroundColor = [

        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)']
    setBackgroundColor(backgroundColor);
}
export const AdiferenciasimetricCmenosB= () => {
    const backgroundColor = [

        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)']
    setBackgroundColor(backgroundColor);
}
  
export const AdiferenciasimetricBCmenosC= () => {
    const backgroundColor = [

        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(255, 255, 255, 0.2)']
    setBackgroundColor(backgroundColor);

}