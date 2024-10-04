import MarketHighlight from "@/app/sections/dashboard/main/MarketHighlight";
import MarketOverview from "@/app/sections/dashboard/main/MarketOverview";
import MarketTopTen from "@/app/sections/dashboard/main/MarketTopTen";

export default function DashboardPage() {
  return (
    <main>
      <MarketOverview />
      <MarketHighlight />
      <MarketTopTen />
    </main>
  );
}
