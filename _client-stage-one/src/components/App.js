import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/show" component={StreamShow} />
          <Route exact path="/streams/create" component={StreamCreate} />
          <Route exact path="/streams/edit" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
