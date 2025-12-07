import Card from "@/components/Card";
import Chart from "@/components/Chart";

export default function StatsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>

      <div className="grid grid-cols-2 gap-6">
        <Card title="Monthly Sales">
          <Chart />
        </Card>

        <Card title="User Growth">
          <Chart />
        </Card>
      </div>
    </div>
  );
}
