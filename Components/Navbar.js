import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-black">
          iJournal
        </Link>

        {/* Nav links */}
        <div className="flex gap-8 text-sm font-medium text-gray-500">
          <Link
            href="/"
            className="transition-colors hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="transition-colors hover:text-black"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-black"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}