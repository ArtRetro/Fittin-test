import Card from "@/components/Card";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Card title="Profile settings">
        <div className="max-w-lg">
          <label className="block mb-4">
            <span className="text-gray-300">Username</span>
            <input
              className="w-full mt-1 p-3 rounded-lg bg-purple-900/30 border border-purple-500/30 outline-none"
              placeholder="Admin"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-300">Email</span>
            <input
              className="w-full mt-1 p-3 rounded-lg bg-purple-900/30 border border-purple-500/30 outline-none"
              placeholder="admin@example.com"
            />
          </label>

          <button className="mt-4 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </Card>
    </div>
  );
}
