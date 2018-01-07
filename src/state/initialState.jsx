export default function calcInitialStore() {
  const browser = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const initialStore = {
    app: {
      location: window.location.pathname,
      browser,
    },
  };

  return initialStore;
}
