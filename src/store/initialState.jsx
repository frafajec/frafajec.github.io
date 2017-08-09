import { routes } from '../router';

export default function calcInitialStore() {
  const currentPath = window.location.pathname;

  // TODO Validate that path matches some route, missing path/url!
  const initalStore = { app: { location: window.location.pathname } };

  return initalStore;
}
