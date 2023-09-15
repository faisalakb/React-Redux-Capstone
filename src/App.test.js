import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import App from './App';

describe('App Component', () => {
  it('should render App component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );


    const appElement = getByText('Find Country?');
    expect(appElement).toBeInTheDocument();
  });


});
