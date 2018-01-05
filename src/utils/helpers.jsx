// takes original fn and args
export function partial(fn, ...fnArgs) {
  return () => {
    fn(...fnArgs);
  };
}

// reduces call to function until timer ends
export function debounce(callback, wait, context = this) {
  let timeout = null;
  let callbackArgs = null;

  const later = () => callback.apply(context, callbackArgs);

  return function debounced() {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
