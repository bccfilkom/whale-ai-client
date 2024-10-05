import logo from "@/assets/icon/logo/auth-logo.svg";
import Image from "next/image";
import bg from "@/assets/background/register-bg.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-10 md:py-20 xl:py-0 flex min-h-screen justify-center items-center bg-black">
      <div className="relative z-0 bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end px-4 md:px-9 py-6 flex flex-col-reverse lg:flex-row gap-6 md:gap-9 rounded-[36px] overflow-hidden">
        <div className="z-20">{children}</div>
        <div className="z-20 flex justify-center items-center gap-2 md:gap-6 text-xl md:text-6xl font-semibold text-white px-[76px]">
          <Image src={logo} alt="logo" />
          <h1>WhaleAI</h1>
        </div>
        <Image
          alt="background"
          src={bg}
          className="absolute right-0 z-10 bottom-0 object-contain"
        />
      </div>
    </main>
  );
}
