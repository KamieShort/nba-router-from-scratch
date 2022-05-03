export async function fetchCharacters() {
  const resp = await fetch('https://rickandmortyapi.com/api/character');
  const data = await resp.json();
  return data.results;
}

// export async function fetchDetails() {
//   const resp = await fetch(
//     `https://rickandmortyapi.com/api/character?status=${statusParam}`
//   );
//   const data = await resp.json();
//   return data;
// }
