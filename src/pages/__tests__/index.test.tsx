import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Home />, div);
});