import MarketHighlight from "@/app/sections/dashboard/main/MarketHighlight";
import MarketOverview from "@/app/sections/dashboard/main/MarketOverview";

export default function DashboardPage() {
  return (
    <main>
      <MarketOverview />
      <MarketHighlight />
    </main>
  );
}
