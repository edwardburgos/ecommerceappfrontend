import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContent from './components/CategoryContent/CategoryContent';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';

// Apollo client configuration
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />} >
              <Route path="" element={<Home />} />
              <Route path=":categories" element={<CategoryContent />} />
              <Route path=":categories/:product" element={<ProductDetails />} />
            </Route>
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
