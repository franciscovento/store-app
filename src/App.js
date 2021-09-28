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
    <Layout>
      <ProductsProvider >
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/shop' component={Shop}/>
      <Route path='/cart' component={Cart} />
      </ProductsProvider>
    </Layout>
    </Switch>
    </>
  );
}

export default App;
