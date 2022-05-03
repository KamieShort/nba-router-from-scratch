import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Should render the header', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByText('Rick and Morty!');
    expect(heading).toBeInTheDocument();
  });
});
