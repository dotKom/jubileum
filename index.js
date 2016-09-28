import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Calendar from './components/calendar';

const App = () => {
  return (
    <div className="container">
      <About />
      <Calendar />
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
