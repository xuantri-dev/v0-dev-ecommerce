import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Users, ShoppingCart, Star, DollarSign, Eye, Settings } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: "2,350",
      change: "+180.1% from last month",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Products",
      value: "1,234",
      change: "+19% from last month",
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Active Users",
      value: "573",
      change: "+201 since last hour",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const quickActions = [
    {
      title: "Manage Products",
      description: "Add, edit, or remove products from your catalog",
      href: "/admin/products",
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "View Orders",
      description: "Process and manage customer orders",
      href: "/admin/orders",
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Manage Users",
      description: "View and manage customer accounts",
      href: "/admin/users",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Reviews",
      description: "Monitor and respond to customer reviews",
      href: "/admin/reviews",
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Categories",
      description: "Organize products into categories",
      href: "/admin/categories",
      icon: Settings,
      color: "bg-gray-500",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
        </div>
        <Button asChild>
          <Link href="/">
            <Eye className="mr-2 h-4 w-4" />
            View Store
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Link href={action.href} className="block">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${action.color} text-white`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{action.title}</h3>
                      <p className="text-gray-600 text-sm">{action.description}</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ORD-001", customer: "Sarah Johnson", amount: "$299.99", status: "Completed" },
                { id: "ORD-002", customer: "Michael Chen", amount: "$539.98", status: "Processing" },
                { id: "ORD-003", customer: "Emma Wilson", amount: "$199.99", status: "Shipped" },
                { id: "ORD-004", customer: "David Brown", amount: "$89.99", status: "Pending" },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className="text-sm text-gray-600">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/admin/orders">View All Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Elegant Silk Dress", sales: 45, revenue: "$13,499.55" },
                { name: "Classic Leather Jacket", sales: 32, revenue: "$14,399.68" },
                { name: "Designer Handbag", sales: 28, revenue: "$5,599.72" },
                { name: "Luxury Watch", sales: 15, revenue: "$8,999.85" },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/admin/products">View All Products</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
