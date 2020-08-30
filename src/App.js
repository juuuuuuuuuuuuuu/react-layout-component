import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import store from './store';
import Header from './components/Header';
import Navigation from './components/Navigation';
import useResize from './hooks/useResize';

function Routes() {
  // resize hook 실행
  useResize();
  return (
    <Switch>
      <Route exact path={['/page1', '/']} component={Page1}></Route>
      <Route path='/page2' component={Page2}></Route>
      <Route path='/page3' component={Page3}></Route>
      <Route path='/page4' component={Page4}></Route>
      <Route path='/page5' component={Page5}></Route>
    </Switch>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navigation />
        <Routes />
      </Router>
    </Provider>
  );
}
export default App;
