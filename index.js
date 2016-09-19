import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Calendar from './components/calendar';

const App = () => {
  return (
    <div className="blue-border">
      <div className="orange-border">
        <div className="white-border">
          <About />
        </div>
      </div>
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
