export default function calcInitialStore() {
  const browser = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // TODO Validate that path matches some route, missing path/url!
  const initialStore = {
    app: {
      location: window.location.pathname,
      browser,
    },
  };

  return initialStore;
}
