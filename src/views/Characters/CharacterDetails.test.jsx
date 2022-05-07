import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CharacterDetails from './CharacterDetails';
-describe('Character Details', () => {
  it('Should render one character by id', async () => {
    render(
      <MemoryRouter>
        <CharacterDetails initialEntries={['/characters/:id']} />
      </MemoryRouter>
    );

    const heading = await screen.findByText('Character Detail');
    expect(heading).toBeInTheDocument();

    screen.getByText(/loading/i);
  });
});
