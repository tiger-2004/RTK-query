import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </main>
  );
};

export default HomePage;