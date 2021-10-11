type ReturnProps = [(id: number) => string];

export default (): ReturnProps => {
  const useGetPokemonImage = (id: number): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return [useGetPokemonImage];
};
