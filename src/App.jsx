import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
};

export default App;
