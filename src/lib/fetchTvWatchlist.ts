export async function fetchTvWatchlist() {
  try {
    const response = await fetch("/api/fetch_tv_watchlist", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tv shows watchlist! ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
