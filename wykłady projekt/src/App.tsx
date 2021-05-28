import React from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';

import Home from './Views/home/Home';
import Movie from './Views/movie/Movie';
import Page404 from './Views/page404/Page404';
import store from './store';

import './App.css';
import { FiberPin } from '@material-ui/icons';
import TodoPanel from './Views/todoPanel/todoPanel';

const App = () => {
    
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={ store}>
          <Switch>
            <Route path="/" component ={Home} exact />
            <Route path="/movie/:id" component={Movie}/>
            <Route path="/todos" component = {TodoPanel}/>
            <Route path="*" component ={ Page404} />
          </Switch>
        </Provider>
      </BrowserRouter>

    </div>
  );
}



export default App;
