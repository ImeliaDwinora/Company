import Link from "next/link";

export default function NavbarHome() {
  return (
    <nav className="mt-6">
              <ul className="flex justify-center gap-8 text-[#5a604d] font-cherry">
                <li>
                  <Link href="/about-us" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    About Us
                  </Link>
                </li>
                <li>
                 <Link href="/services" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Services
                  </Link>
                </li>
                <li>
                <Link href="/articles" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Articles
                  </Link>
                </li>
                <li>
                <Link href="/teams" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Teams
                  </Link>
                </li>
              </ul>
            </nav>
  );
}