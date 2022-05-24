// import fetch from 'cross-fetch';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';

// global.fetch = fetch;

// const server = setupServer(
//   rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) =>
//     res(ctx.json())
//   )
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
