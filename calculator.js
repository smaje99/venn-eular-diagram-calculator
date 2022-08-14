export const calculatorSets = data => {
    const ABC = parseInt(data.get('elementsABC'));
    const AB = parseInt(data.get('elementsAB')) - ABC;
    const AC = parseInt(data.get('elementsAC')) - ABC;
    const BC = parseInt(data.get('elementsBC')) - ABC;
    const onlyA = parseInt(data.get('elementsA')) - (ABC + AB + AC);
    const onlyB = parseInt(data.get('elementsB')) - (ABC + AB + BC);
    const onlyC = parseInt(data.get('elementsC')) - (ABC + AC + BC);
    let notABC = NaN;
    let universal = NaN;

    if (!!!data.get('sample')) {
        notABC = parseInt(data.get('elementsNotABC'));
        universal = onlyA + onlyB + onlyC + ABC + AB + AC + BC + notABC;
    } else {
        universal = parseInt(data.get('sample'));
        notABC = universal - (onlyA + onlyB + onlyC + ABC + AB + AC + BC);
    }

    return { onlyA, onlyB, onlyC, AB, AC, BC, ABC, notABC, universal };
}

export const operations = {
    'AUB': (data) => data.onlyA + data.onlyB + data.AB + data.AC + data.BC + data.ABC,
    'AnB': (data) => data.AB + data.ABC,
    'AnC': (data) => data.AC + data.ABC,
    'A-BUC': (data) => data.onlyA,
    'A△C-B': (data) => data.onlyA + data.onlyC,
    'AUBUC': (data) => data.onlyA + data.onlyB + data.onlyC + data.AB + data.AC + data.BC + data.ABC
}