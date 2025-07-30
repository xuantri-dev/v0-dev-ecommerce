"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Divider,
  Container,
} from "@mui/material"
import { ArrowBack, LocalShipping, CreditCard, Security } from "@mui/icons-material"

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
    size: "M",
    color: "Black",
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: 89.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
    size: "32",
    color: "Blue",
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [sameAsShipping, setSameAsShipping] = useState(true)

  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Button component={Link} href="/cart" startIcon={<ArrowBack />} sx={{ mb: 2, color: "text.secondary" }}>
            Back to Cart
          </Button>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            Checkout
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 4 }}>
          {/* Left Column - Forms */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Shipping Information */}
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocalShipping sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Shipping Information
                  </Typography>
                </Box>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, mb: 2 }}>
                  <TextField label="First Name" placeholder="John" fullWidth />
                  <TextField label="Last Name" placeholder="Doe" fullWidth />
                </Box>
                <TextField label="Email" type="email" placeholder="john@example.com" fullWidth sx={{ mb: 2 }} />
                <TextField label="Address" placeholder="123 Main Street" fullWidth sx={{ mb: 2 }} />
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
                  <TextField label="City" placeholder="New York" fullWidth />
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select label="State">
                      <MenuItem value="ny">New York</MenuItem>
                      <MenuItem value="ca">California</MenuItem>
                      <MenuItem value="tx">Texas</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="ZIP Code" placeholder="10001" fullWidth />
                </Box>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <CreditCard sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Payment Information
                  </Typography>
                </Box>
                <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} sx={{ mb: 2 }}>
                  <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
                  <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                  <FormControlLabel value="apple" control={<Radio />} label="Apple Pay" />
                </RadioGroup>

                {paymentMethod === "card" && (
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                    <TextField label="Card Number" placeholder="1234 5678 9012 3456" fullWidth />
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                      <TextField label="Expiry Date" placeholder="MM/YY" />
                      <TextField label="CVV" placeholder="123" />
                    </Box>
                    <TextField label="Name on Card" placeholder="John Doe" fullWidth />
                  </Box>
                )}

                <FormControlLabel
                  control={<Checkbox checked={sameAsShipping} onChange={(e) => setSameAsShipping(e.target.checked)} />}
                  label="Billing address same as shipping"
                  sx={{ mt: 2 }}
                />
              </CardContent>
            </Card>
          </Box>

          {/* Right Column - Order Summary */}
          <Box>
            <Card sx={{ position: "sticky", top: 32 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                  Order Summary
                </Typography>

                {/* Cart Items */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
                  {mockCartItems.map((item) => (
                    <Box key={item.id} sx={{ display: "flex", gap: 2 }}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Size: {item.size}, Color: {item.color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Qty: {item.quantity}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Order Totals */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Subtotal</Typography>
                    <Typography>${subtotal.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Shipping</Typography>
                    <Typography>${shipping.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Tax</Typography>
                    <Typography>${tax.toFixed(2)}</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Total
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      ${total.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                {/* Security Notice */}
                <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 1, mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Security fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      Your payment information is secure and encrypted
                    </Typography>
                  </Box>
                </Box>

                {/* Place Order Button */}
                <Button variant="contained" size="large" fullWidth sx={{ mb: 2 }}>
                  Place Order - ${total.toFixed(2)}
                </Button>

                <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center", display: "block" }}>
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
