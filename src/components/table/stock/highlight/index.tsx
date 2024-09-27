import { Stock } from "@/types/stocks";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";

const HighlightStockTable = ({
  stocks,
  title,
  link = "",
}: {
  stocks: Stock[];
  title: string;
  link: string;
}) => {
  return (
    <div className="text-base-black border border-neutral-200 rounded-xl bg-base-white p-4 font-normal">
      <div className="flex justify-between gap-4 text-lg">
        <h4 className="font-bold ">{title}</h4>
        <Link
          href={link}
          className="text-base-black hover:text-success-60 font-bold transition-all duration-500 flex items-center gap-1"
        >
          See All <ChevronRight size={30} />
        </Link>
      </div>
      <table className="w-full max-w-full">
        <thead className="w-full">
          <tr className="flex justify-between py-4">
            <th className="font-semibold text-start columns-2 w-3/12">
              Symbol
            </th>
            <th className="font-semibold text-center columns-1 w-2/12">
              Price
            </th>
            <th className="font-semibold text-center columns-1 w-2/12">
              Change
            </th>
            <th className="font-semibold text-end columns-1 w-5/12">Change%</th>
            {/* <th className="font-medium columns-1">Volume</th> */}
          </tr>
        </thead>
        <tbody className="mt-2 w-full">
          {stocks.slice(0, 9).map((stock) => {
            return (
              <tr
                key={stock.ticker}
                className="flex text-sm lg:text-base justify-between py-2 border-b border-neutral-200 w-full"
              >
                <td className="columns-2 text-start w-3/12">{stock.ticker}</td>
                <td className="columns-1 w-2/12 text-center">{stock.price}</td>
                <td className="columns-1 w-2/12 text-center">
                  {stock.change_amount}
                </td>
                <td className="columns-1 w-5/12 flex justify-end pr-1">
                  {stock.change_percentage.charAt(0) === "-" ? (
                    <span className="flex items-center">
                      <ChevronDown size={20} className="text-danger-80" />
                      <p className="text-danger-80">
                        {stock.change_percentage}
                      </p>
                    </span>
                  ) : (
                    <div className="flex items-center">
                      <ChevronUp size={20} className="text-success-80" />
                      <span className="text-success-80">
                        {stock.change_percentage}
                      </span>
                    </div>
                  )}
                </td>

                {/* <td className="columns-1">{stock.volume}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HighlightStockTable;
