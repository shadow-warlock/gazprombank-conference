export function findObject(prop, value) {
    let obj = {};

    this.forEach(item => {
        if (item[prop] === value) {
            obj = item;
        }
    });

    return obj;
}