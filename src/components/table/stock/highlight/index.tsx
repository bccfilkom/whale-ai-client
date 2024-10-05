import { Stock } from "@/types/stocks";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HighlightStockTable = ({
  stocks,
  title,
  link,
}: {
  stocks: Stock[];
  title: React.ReactNode;
  link: string | null;
}) => {
  return (
    <div className="text-base-black rounded-3xl bg-gray/50 p-3 md:p-9 text-white font-normal w-full overflow-x-auto">
      <div className="flex justify-between gap-4 text-lg">
        <h4 className="font-bold">{title}</h4>
        {link && (
          <Link
            href={link}
            className="text-base-black hover:text-success-60 font-bold transition-all duration-500 flex items-center gap-1"
          >
            See All <ChevronRight size={30} />
          </Link>
        )}
      </div>
      <table className="w-full table-auto mt-4">
        <thead className="w-full text-[#7E7E7E]">
          <tr className="text-left">
            <th className="font-semibold text-start w-3/12">Symbol</th>
            <th className="font-semibold text-center w-2/12">Price</th>
            <th className="font-semibold text-center w-2/12">Change</th>
            <th className="font-semibold text-center w-5/12">%Change</th>
          </tr>
        </thead>
        <tbody className="mt-4 w-full">
          {stocks.slice(0, 9).map((stock) => (
            <tr key={stock.ticker} className="text-sm lg:text-base py-2">
              <td className="py-1.5 text-start w-3/12">{stock.ticker}</td>
              <td className="py-1.5 text-center w-2/12">{stock.price}</td>
              <td className="py-1.5 text-center w-2/12">{stock.change_amount}</td>
              <td className="py-1.5 pr-1 w-5/12">
                <div className="flex items-center justify-center">
                {stock.change_percentage.charAt(0) === "-" ? (
                  <span className="flex items-center bg-[#FBD7D7] py-0.5 px-3 rounded-lg">
                    <p className="text-[#B00B0B]">{stock.change_percentage}</p>
                  </span>
                ) : (
                  <span className="flex items-center bg-[#D7FBE6] py-0.5 px-3 rounded-lg">
                    <p className="text-[#0BB06A]">{stock.change_percentage}</p>
                  </span>
                )}
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighlightStockTable;
