export const switchOn = (key, obj) => obj[key] || obj.default;
export const ifElse = (predicate, pass, fail) => (predicate ? pass : fail);
