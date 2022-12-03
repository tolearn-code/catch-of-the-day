// let's go!
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './StorePicker';
import Apps from './Apps';
import './css/style.css';
import Router from './Router';

render(<Router />, document.querySelector('#main'));
