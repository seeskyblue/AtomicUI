export function isNull(value) {
  return value === null;
}

export function isUndefined(value) {
  return value === undefined;
}

export function isNone(value) {
  return isUndefined(value) || isNull(value);
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isNaN(value) {
  return Number.isNaN(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isValuePresent(value) {
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    !(typeof value === 'number' && Number.isNaN(value))
  );
}
