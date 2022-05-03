import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('Should render the list of characters', async () => {
    render(
      <MemoryRouter initialEntries={['/characters']}>
        <App />
      </MemoryRouter>
    );

   
  });
});
