import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import CharacterList from './CharacterList';

describe('Character Details', () => {
  it('Should render list of characters', async () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);

    const heading = await screen.findByText('Character List');
    expect(heading).toBeInTheDocument();

    const mortyLink = await screen.findByText('Morty Smith');
    userEvent.click(mortyLink);

    screen.getByRole('img', { name: /image of morty smith/i });

    screen.getByAltText(/image of morty smith/i);

    const rickLink = await screen.findByText('Rick Sanchez');
    userEvent.click(rickLink);

    waitFor(() => {
      const details = screen.findByText('Character Detail');
      expect(details).toBeInTheDocument();

      const rickDetails = screen.findByText('Rick Sanchez');
      expect(rickDetails).toBeInTheDocument();
    });
  });
});
