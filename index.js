import React from 'react';
import D from 'react-dom';

require('./styles/base.scss');

import About from './components/about';
import Fadder from './components/fadder';
import Partners from './components/partners';
import Calendar from './components/calendar';
import Join from './components/join';
import Contact from './components/contact';
import Slack from './components/slack';
import Social from './components/social';

const App = () => {
  return (
    <div className="blue-border">
      <div className="orange-border">
        <div className="white-border">
          <About />
          {/*<Fadder />
           <Calendar />
           <Join />
           <Slack />
           <Social />
           <Contact />
           <Partners />*/}
        </div>
      </div>
    </div>
  );
};

D.render(
  <App />,
  document.getElementById('app')
);
