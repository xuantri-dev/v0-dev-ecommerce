"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
  IconButton,
  Container,
  Paper,
  InputAdornment,
  Grid,
} from "@mui/material"
import {
  Search,
  MoreVert,
  PersonAdd,
  PersonOff,
  Email,
  Visibility,
  People,
  PersonCheck,
  Block,
  Mail,
} from "@mui/icons-material"

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    role: "customer",
    joinDate: "2024-01-15",
    orders: 5,
    totalSpent: 459.95,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    role: "customer",
    joinDate: "2024-01-10",
    orders: 12,
    totalSpent: 1299.8,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "blocked",
    role: "customer",
    joinDate: "2023-12-20",
    orders: 3,
    totalSpent: 189.97,
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    role: "admin",
    joinDate: "2023-11-01",
    orders: 0,
    totalSpent: 0,
  },
]

export default function AdminUsersPage() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleUserStatus = (userId: number) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: user.status === "active" ? "blocked" : "active" } : user,
      ),
    )
    setAnchorEl(null)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, user: any) => {
    setAnchorEl(event.currentTarget)
    setSelectedUser(user)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedUser(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "success"
      case "blocked":
        return "error"
      default:
        return "default"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "secondary"
      case "customer":
        return "primary"
      default:
        return "default"
    }
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", mb: 1 }}>
            User Management
          </Typography>
          <Typography color="text.secondary">Manage user accounts and permissions</Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <People sx={{ fontSize: 32, color: "primary.main" }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {users.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Users
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <PersonCheck sx={{ fontSize: 32, color: "success.main" }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "success.main" }}>
                      {users.filter((u) => u.status === "active").length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Active Users
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Block sx={{ fontSize: 32, color: "error.main" }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "error.main" }}>
                      {users.filter((u) => u.status === "blocked").length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Blocked Users
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Mail sx={{ fontSize: 32, color: "secondary.main" }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "secondary.main" }}>
                      {users.filter((u) => u.role === "admin").length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Admins
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Users ({filteredUsers.length})
              </Typography>
              <TextField
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                sx={{ minWidth: 250 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Join Date</TableCell>
                    <TableCell>Orders</TableCell>
                    <TableCell>Total Spent</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} hover>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar src={user.avatar || "/placeholder.svg"} alt={user.name}>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                              {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {user.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip label={user.role} color={getRoleColor(user.role) as any} size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip label={user.status} color={getStatusColor(user.status) as any} size="small" />
                      </TableCell>
                      <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                      <TableCell>{user.orders}</TableCell>
                      <TableCell>${user.totalSpent.toFixed(2)}</TableCell>
                      <TableCell>
                        <IconButton size="small" onClick={(e) => handleMenuClick(e, user)}>
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* User Actions Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>
            <Visibility sx={{ mr: 1 }} />
            View Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Email sx={{ mr: 1 }} />
            Send Email
          </MenuItem>
          <MenuItem onClick={() => selectedUser && toggleUserStatus(selectedUser.id)}>
            {selectedUser?.status === "active" ? (
              <>
                <PersonOff sx={{ mr: 1 }} />
                Block User
              </>
            ) : (
              <>
                <PersonAdd sx={{ mr: 1 }} />
                Unblock User
              </>
            )}
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  )
}
