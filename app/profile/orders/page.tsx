import { Box, Card, CardContent, Typography, Chip, Button, Container, Grid } from "@mui/material"
import { Visibility, GetApp, LocalShipping, Inventory } from "@mui/icons-material"
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
      return "success"
    case "shipped":
      return "info"
    case "processing":
      return "warning"
    case "cancelled":
      return "error"
    default:
      return "default"
  }
}

export default function OrderHistoryPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
            Order History
          </Typography>
          <Typography color="text.secondary">Track and manage your orders</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 3,
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {order.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Chip
                    label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    color={getStatusColor(order.status) as any}
                    variant="filled"
                  />
                </Box>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">
                      Total Amount
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      ${order.total.toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">
                      Items
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {order.items} item{order.items > 1 ? "s" : ""}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">
                      Tracking Number
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {order.trackingNumber || "Not available"}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="body2" color="text.secondary">
                      Status
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
                      {order.status}
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Button variant="outlined" size="small" startIcon={<Visibility />}>
                    View Details
                  </Button>
                  {order.trackingNumber && (
                    <Button variant="outlined" size="small" startIcon={<LocalShipping />}>
                      Track Package
                    </Button>
                  )}
                  <Button variant="outlined" size="small" startIcon={<GetApp />}>
                    Download Invoice
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outlined" size="small">
                      Reorder
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {mockOrders.length === 0 && (
          <Card>
            <CardContent sx={{ textAlign: "center", py: 8 }}>
              <Inventory sx={{ fontSize: 64, color: "text.secondary", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                No orders yet
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Start shopping to see your orders here
              </Typography>
              <Button component={Link} href="/shop" variant="contained">
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  )
}
