"use client";

import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <header className="w-full flex items-center justify-between gap-4 py-4 px-6 bg-transparent">
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 rounded-xl bg-purple-900/30 border border-purple-500/20 outline-none placeholder:text-gray-400"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-purple-700/30 transition">
          <BellIcon className="h-5 w-5 text-gray-300" />
        </button>

        <div className="flex items-center gap-3 bg-purple-900/20 p-2 rounded-xl">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400" />
          <div className="text-sm">
            <div className="font-medium text-white">Artem</div>
            <div className="text-xs text-gray-300">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
