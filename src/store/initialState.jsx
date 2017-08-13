import { routes } from '../router';

export default function calcInitialStore() {
  const currentPath = window.location.pathname;
  const browser = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // TODO Validate that path matches some route, missing path/url!
  const initalStore = {
    app: {
      location: window.location.pathname,
      browser,
    },
  };

  return initalStore;
}
