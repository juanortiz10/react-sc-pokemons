import { FC } from "react";

import { getPokemons } from "@/app/utils";
import Content from "./Content";
import { Pokemon } from "@/app/types";

type PokemonListProps = {
  limit: number;
  offset: number;
};

const PokemonList: FC<PokemonListProps> = async ({ offset, limit }) => {
  const { results } = (await getPokemons(limit, offset)) as {
    results: Pokemon[];
  };

  return (
    <>
      <Content results={results} />
      <div className="mt-8 flex justify-between">
        {offset > 0 && (
          <a
            href={`/?offset=${offset - 1}&limit=${limit}`}
            className="text-white transition border-2 bg-transparent w-36 h-10 flex items-center justify-center rounded-lg font-semibold no-underline"
          >
            Atras
          </a>
        )}
        <a
          href={`/?offset=${offset + 1}&limit=${limit}`}
          className="text-white transition border-2 bg-transparent w-36 h-10 flex items-center justify-center rounded-lg font-semibold no-underline"
        >
          Siguiente
        </a>
      </div>
    </>
  );
};

export default PokemonList;
