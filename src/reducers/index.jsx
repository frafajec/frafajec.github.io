import { combineReducers } from 'redux';

import app from './app';
import projects from './projects';

export default combineReducers({ app, projects });
