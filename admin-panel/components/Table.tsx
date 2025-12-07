"use client";

export default function Table() {
  return (
    <div className="overflow-x-auto rounded-xl border border-purple-600/20 bg-purple-900/20 p-2">
      <table className="w-full text-white">
        <thead>
          <tr className="text-sm text-gray-300">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-purple-600/10">
            <td className="p-3">John Doe</td>
            <td className="p-3">Developer</td>
            <td className="p-3 text-green-400">Active</td>
            <td className="p-3">$1,200</td>
          </tr>
          <tr className="border-t border-purple-600/10">
            <td className="p-3">Sarah Smith</td>
            <td className="p-3">Designer</td>
            <td className="p-3 text-yellow-300">Pending</td>
            <td className="p-3">$400</td>
          </tr>
          <tr className="border-t border-purple-600/10">
            <td className="p-3">Alex Williams</td>
            <td className="p-3">PM</td>
            <td className="p-3 text-red-400">Banned</td>
            <td className="p-3">$0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
