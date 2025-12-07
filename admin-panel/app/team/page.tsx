import Card from "@/components/Card";
import Table from "@/components/Table";

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Team Members</h1>

      <Table />

      <div className="grid grid-cols-3 gap-6 mt-8">
        <Card title="John Doe">
          <p>Fronend Developer</p>
        </Card>
        <Card title="Sarah Smith">
          <p>UI/UX Designer</p>
        </Card>
        <Card title="Alex Williams">
          <p>Project Manager</p>
        </Card>
      </div>
    </div>
  );
}
