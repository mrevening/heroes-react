import { Provider } from 'react-redux';
import App from './app/App'
import store from './store';

export default function State() {
    return(
      <Provider store = {store}>
        { <App /> }
      </Provider>
    );
} 
