import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className="flex justify-center items-center w-full mx-auto py-8">
        <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={200}
              height={200}
              priority
            />
    </nav>
  );
}
