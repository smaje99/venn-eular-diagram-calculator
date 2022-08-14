import { $ } from './utils/dom';


// setup
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
    config = { options: { borderColor, backgroundColor } , ...config}
    buildDiagram($('#myChart'))
}


export function buildDiagram(canvas){
    const ctx = canvas.getContext('2d');
    return new Chart(ctx, config);
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