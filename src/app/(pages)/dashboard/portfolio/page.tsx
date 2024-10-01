export default async function DashboardAssetsPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query || "%";
  const { searchStocks } = await import("@/services/stocks");
  const stocks = await searchStocks(query);
  return (
    <main className="container py-10 md:py-10">
      <h2 className="font-bold text-3xl md:text-6xl">My Portfolio</h2>
      <p>{JSON.stringify(stocks)}</p>
    </main>
  );
}
