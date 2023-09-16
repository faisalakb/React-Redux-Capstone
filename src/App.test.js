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

    // Replace the text below with the content you expect to be rendered
    const appElement = getByText('Find Country?'); // Replace with your expected content
    expect(appElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});
