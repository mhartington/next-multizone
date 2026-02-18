"use client";

import { FormEvent, useState } from "react";

type SearchResult = {
  id: string;
  title: string;
  href: string;
};

type SearchResponse = {
  zone: string;
  query: string;
  count: number;
  results: SearchResult[];
};

export function DocsSearch() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/docs/api/search?q=${encodeURIComponent(query.trim())}`
      );

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const data = (await response.json()) as SearchResponse;
      setResults(data.results);
    } catch {
      setError("Unable to search docs right now.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <h2>Search Docs</h2>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search docs pages"
          aria-label="Search docs pages"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {error ? <p>{error}</p> : null}

      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.href}>{result.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
