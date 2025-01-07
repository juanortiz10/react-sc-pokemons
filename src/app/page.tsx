import { Suspense } from "react";
import Header from "./components/Header";
import LimitDropdown from "./components/LimitDropdown";
import PokemonList from "./components/PokemonList";
import Spinner from "./components/Spinner";

export default async function Home(props: {
  searchParams?: Promise<{
    limit?: string;
    offset?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const limit = searchParams?.limit ? parseInt(searchParams.limit) : 10;
  const offset = searchParams?.offset ? parseInt(searchParams.offset) : 0;


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <Header />
        <main className="p-4">
          <Suspense fallback={<Spinner />}>
            <LimitDropdown limit={limit} offset={offset} />
            <PokemonList limit={limit} offset={offset} />
          </Suspense>
        </main>
    </div>
  );
}
