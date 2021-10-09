import {Switch, Route, Redirect} from 'react-router-dom'
import Layout from './components/Layout';
import Cart from './views/Cart';
import Shop from './views/Shop';
import {ProductsProvider} from './context/ProductsContext'
import Checkout from './views/Checkout';

function App() {
  return (
    <>
    <Switch>
      <ProductsProvider >
        <Layout>
          <Route path='/' exact >
            <Redirect to='/shop' />
          </Route>
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={Register} /> */}
          <Route path='/shop' component={Shop}/>
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Layout>
      </ProductsProvider>
    </Switch>
    </>
  );
}

export default App;
