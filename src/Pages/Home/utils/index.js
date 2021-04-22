export const arrayFromNumber = number => {
    const array = [];
    for (let index = 0; index < number; index++) {
        array.push(index);
    }
    return array;
}