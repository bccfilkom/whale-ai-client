export interface Market {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: "open" | "closed";
  notes: string;
}
