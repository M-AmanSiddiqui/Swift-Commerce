import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io'; // For the Add Product icon

const AdminDashboard = () => {
  const totalProducts = 150;  // Example number
  const totalOrders = 230;    // Example number
  const totalUsers = 120;     // Example number

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {/* Total Products Card */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-gray-600">Total Products</Typography>
            <Typography variant="h4" className="text-gray-800 font-semibold">{totalProducts}</Typography>
          </CardContent>
        </Card>

        {/* Total Orders Card */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-gray-600">Total Orders</Typography>
            <Typography variant="h4" className="text-gray-800 font-semibold">{totalOrders}</Typography>
          </CardContent>
        </Card>

        {/* Total Users Card */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-gray-600">Total Users</Typography>
            <Typography variant="h4" className="text-gray-800 font-semibold">{totalUsers}</Typography>
          </CardContent>
        </Card>
      </div>

      {/* Add Product Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-800">Add New Product</h2>
        <Button
          variant="contained"
          color="primary"
          startIcon={<IoIosAddCircle />}
        >
          Add Product
        </Button>
      </div>

      {/* Other sections like Product List, Order List, etc. can be added here */}
    </div>
  );
}

export default AdminDashboard;
