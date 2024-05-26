import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";
import users from "@/dummy-data/users.json";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = users[0];

  return (
    <main className="flex h-screen w-full font-inter">
      {/* SIDEBAR */}
      <Sidebar user={user} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={'/icons/logo.svg'} alt={'logo'} width={30} height={30} />

          <div>
            <MobileNav user={user} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
