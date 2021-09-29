import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Cart from './views/Cart';
import Shop from './views/Shop';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import {ProductsProvider} from './context/ProductsContext'

function App() {
  return (
    <>
    <Switch>
      <ProductsProvider >
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/shop' component={Shop}/>
          <Route path='/cart' component={Cart} />
        </Layout>
      </ProductsProvider>
    </Switch>
    </>
  );
}

export default App;
