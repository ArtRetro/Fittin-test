import Card from "@/components/Card";
import Table from "@/components/Table";

export default function BillingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Billing</h1>

      <div className="grid grid-cols-1 gap-6">
        <Card title="Recent Transactions">
          <Table />
        </Card>

        <Card title="Invoices">
          <div className="h-40 flex items-center justify-center text-gray-300">
            Placeholder for invoices / charts
          </div>
        </Card>
      </div>
    </div>
  );
}
