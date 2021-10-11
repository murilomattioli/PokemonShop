import { PokemonProps } from "../../../components/PokemonCard/Component";

export type CartType = Array<PokemonProps & { amount: number }>;
