import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';
import BookList from '../../features/book/BookList/BookList';
import moment from 'moment';

require('moment/locale/hr'); //locale hr for moment

moment.locale('hr');

class App extends Component {

  render() {

    return (
      <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Route path="/(.+)" render={() => (
        <div>
          <NavBar />
          <Container className="main">
            <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/bookList' component={BookList} />
              {/* <Route path='/events' component={EventDashboard} />
              <Route path='/event/:id' component={EventDetailedPage} />
              <Route path='/manage/:id' component={EventForm} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
              <Route path='/test' component={TestComponent} /> */}
            </Switch>
          </Container>
        </div>
      )}
      />
    </div>
    );
  }
}

export default App;
