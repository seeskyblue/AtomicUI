/*****************************************************************************
 * Color helpers
 *****************************************************************************/
import { composeRight } from 'helper/compose';

function hex2dec(hex) {
  return Number(`0x${hex}`);
}

export function hex2rgba(hex, alpha = 1) {
  const [r1, r2, g1, g2, b1, b2] = hex.startsWith('#') ? hex.substring(1) : hex;
  const red = hex2dec(r1 + r2);
  const green = hex2dec(g1 + g2);
  const blue = hex2dec(b1 + b2);
  return `rgba(${[red, green, blue, alpha].join(', ')})`;
}

/*****************************************************************************
 * Unit helpers
 *****************************************************************************/
export function px(arg) {
  const number = Number(arg);
  return Number.isNaN(number) ? arg : `${number}px`;
}

/*****************************************************************************
 * Styled-components helpers
 *****************************************************************************/
function isFunction(target) {
  return typeof target === 'function';
}

function getNestedNames(name) {
  return name?.split?.('.');
}

function getInProps(names, props) {
  return names.reduce((acc, cur) => (acc ? acc[cur] : acc), props);
}

function styleProps(style, props) {
  return isFunction(style) ? style(props) : style;
}

export function getProp(name, ...interceptors) {
  if (!name) return name;

  const names = getNestedNames(name);

  return composeRight(props => {
    const propValue = getInProps(names, props);
    return styleProps(propValue, props);
  }, ...interceptors);
}

getProp.map = function(name, map, defVal, ...interceptors) {
  return composeRight(props => {
    const propValue = getProp(name)(props);
    const style = map[propValue] || map[defVal];
    return styleProps(style, props);
  }, ...interceptors);
};

getProp.assert = function(name, [truth = '', falsy = ''], ...interceptors) {
  return composeRight(props => {
    const propValue = getProp(name)(props);
    const style = propValue ? truth : falsy;
    return styleProps(style, props);
  }, ...interceptors);
};

export function getTheme(name, ...args) {
  return getProp(`theme.${name}`, ...args);
}

getTheme.map = function(name, ...args) {
  return getProp.map(`theme.${name}`, ...args);
};

getTheme.assert = function(name, ...args) {
  return getProp.assert(`theme.${name}`, ...args);
};
