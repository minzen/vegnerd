import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name vegnerd', () => {
  render(<App />);
  const appName = screen.getByAltText(/Vegnerd/i);
  expect(appName).toBeInTheDocument();
});
