export async function GET() {
  return new Response(
    JSON.stringify({
      code: 200,
      message: "Welcome to the API",
    }),
    { status: 200 }
  );
}
