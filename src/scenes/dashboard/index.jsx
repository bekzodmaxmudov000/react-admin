import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      
    </Box>
  )
}

export default Dashboard