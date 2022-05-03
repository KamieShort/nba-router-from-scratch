import { render, screen } from '@testing-library/react';
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

    // const heading = await screen.findByText('Character Detail');
    // expect(heading).toBeInTheDocument();

    screen.getByText(/loading/i);

    const mortylink = await screen.findByText('Morty Smith');
    userEvent.click(mortylink);
  });
});
