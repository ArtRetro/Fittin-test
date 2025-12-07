"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Project", path: "/project" },
  { name: "Billings", path: "/billings" },
  { name: "Team", path: "/team" },
  { name: "Stats", path: "/stats" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-[#191340] to-[#0d0b2e] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400" />
        <div>
          <div className="text-white font-bold">Admin Panel</div>
          <div className="text-xs text-gray-300">Welcome back</div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        {menu.map((item) => {
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-3 rounded-xl transition-colors text-sm ${
                active
                  ? "bg-purple-600 text-white shadow"
                  : "text-gray-300 hover:bg-purple-500/40 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
