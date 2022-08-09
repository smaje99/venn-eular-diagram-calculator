export const validateTotalityInput = (notABC, sample) => {
    const valueNotABC = parseInt(notABC.value);
    const valueSample = parseInt(sample.value);

    if (valueNotABC) {
        notABC.disabled = false;
        sample.disabled = true;
    } else if (valueSample) {
        sample.disabled = false;
        notABC.disabled = true;
    } else {
        notABC.disabled = false;
        sample.disabled = false;
    }
}