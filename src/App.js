import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetail}/>
          <Route>404 Not found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;