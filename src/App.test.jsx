import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('Should render the list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = await screen.findByText('Rick and Morty!');
    expect(heading).toBeInTheDocument();

    screen.getByText(/loading/i);

    const mortylink = await screen.findByText('Morty Smith');
    userEvent.click(mortylink);
  });
});
