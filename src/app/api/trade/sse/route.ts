import { SSE_URL } from "@/utils/env";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbols = searchParams.get("symbols") || "BINANCE:BTCUSDT";
  const sseUrl = `${SSE_URL}?symbols=${symbols}`;

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await fetch(sseUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch SSE data");
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error("Reader not found");
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          controller.enqueue(`data: ${chunk}\n\n`);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error occurred";
        controller.enqueue(`data: Error: ${errorMessage}\n\n`);
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
