export async function fetchMoviesWatchlist() {
  try {
    const response = await fetch("/api/fetch_movies_watchlist", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movies watchlist! ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
