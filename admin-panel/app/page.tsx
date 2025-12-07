import Card from "@/components/Card";
import Chart from "@/components/Chart";
import UserActivityChart from "@/components/UserActivityChart";


export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1">Hi Admin,</h1>
      <p className="text-gray-300 mb-6">Good afternoon</p>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card title="Views">
          <h2 className="text-4xl font-bold">500</h2>
          <p className="text-gray-300">Per day</p>
        </Card>

        <Card title="Visits">
          <h2 className="text-4xl font-bold">2400</h2>
          <p className="text-gray-300">Per minute</p>
        </Card>

        <Card title="Orders">
          <h2 className="text-4xl font-bold">988</h2>
          <p className="text-gray-300">Per day</p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card title="Sales Overview">
          <Chart />
        </Card>

        <Card title="User Activity">
  <UserActivityChart />
</Card>
      </div>
    </div>
  );
}
