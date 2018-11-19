export const car = z => z(x => x); // second arg unused here
export const cdr = z => z((x, y) => y);