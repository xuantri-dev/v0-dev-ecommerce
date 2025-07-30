import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, Package } from "lucide-react"
import Link from "next/link"

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    total: 159.98,
    status: "delivered",
    items: 3,
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-10",
    total: 89.99,
    status: "shipped",
    items: 1,
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-05",
    total: 249.97,
    status: "processing",
    items: 2,
    trackingNumber: null,
  },
  {
    id: "ORD-2024-004",
    date: "2023-12-28",
    total: 79.99,
    status: "cancelled",
    items: 1,
    trackingNumber: null,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800"
    case "shipped":
      return "bg-blue-100 text-blue-800"
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Order History</h1>
          <p className="text-gray-600 mt-2">Track and manage your orders</p>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Items</p>
                    <p className="font-semibold">
                      {order.items} item{order.items > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tracking Number</p>
                    <p className="font-semibold">{order.trackingNumber || "Not available"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold capitalize">{order.status}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  {order.trackingNumber && (
                    <Button variant="outline" size="sm">
                      <Package className="mr-2 h-4 w-4" />
                      Track Package
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Invoice
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockOrders.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-4">Start shopping to see your orders here</p>
              <Button asChild>
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
