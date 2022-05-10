import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('Should render the character detail page of Summer Smith then allow user to navigate to list of characters', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/3']} initialIndex={2}>
        <App />
      </MemoryRouter>
    );

    const appHeading = await screen.findByText('Rick and Morty!');
    expect(appHeading).toBeInTheDocument();

    const characterDetailHeading = await screen.findByText('Character Details');
    expect(characterDetailHeading).toBeInTheDocument();

    const summerHeading = await screen.findByRole('heading', {
      name: /summer smith/i,
    });
    expect(summerHeading).toBeInTheDocument();

    screen.getByRole('img', { name: /image of summer smith/i });

    screen.getByAltText(/image of summer smith/i);

    const allCharactersLink = screen.getByRole('link', {
      name: /all characters/i,
    });
    userEvent.click(allCharactersLink);

    screen.getByText(/loading/i);

    const characterListHeading = await screen.findByText('Character List');
    expect(characterListHeading).toBeInTheDocument();

    const characterList = await screen.findByRole('heading', {
      name: /abadango cluster princess/i,
    });
    expect(characterList).toBeInTheDocument();
  });
});
