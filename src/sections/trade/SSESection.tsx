"use client";
import { useEffect, useState } from "react";

export default function SSESection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(
      "/api/trade/sse?symbols=BINANCE:BTCUSDT"
    );

    eventSource.onmessage = function (event) {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    eventSource.onerror = function () {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
