import Navbar from "@/components/navbar";
import Hero from "./sections/home/Hero";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
