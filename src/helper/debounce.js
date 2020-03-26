// Corresponds to 10 frames at 60 Hz. (1000 / 60 * 10 = 166)
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
// eslint-disable-next-line no-magic-numbers
export default function debounce(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    // eslint-disable-next-line consistent-this
    const that = this;
    const later = () => {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
