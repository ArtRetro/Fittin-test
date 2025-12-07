import Card from "@/components/Card";
import Table from "@/components/Table";

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card title="Landing Page Redesign">
          <p>Status: In Progress</p>
        </Card>
        <Card title="Mobile App Development">
          <p>Status: Completed</p>
        </Card>
        <Card title="Marketing Dashboard">
          <p>Status: Pending</p>
        </Card>
      </div>

      <Card title="All Projects">
        <div className="mt-4">
          <Table />
        </div>
      </Card>
    </div>
  );
}
