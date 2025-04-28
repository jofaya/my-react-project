import * as React from 'react';
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material';
import DataTableStatus from '../DataTable/DataTableStatus';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsStatus() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<div>
  {/* Header */}
  <Box
    sx={{
      backgroundColor: '#1976d2',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '8px 8px 0 0',
      boxShadow: 1,
      marginTop:'30px',
    }}
  >
    <Typography variant="h5">DASHBOARD</Typography>
  </Box>

  {/* Tabs Section */}
  <Paper elevation={3} sx={{ borderRadius: '0 0 8px 8px' }}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dashboard tabs"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Projets" {...a11yProps(0)} />
          <Tab label="Historiques" {...a11yProps(1)} />
          <Tab label="Pointages" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <DataTableStatus/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTableStatus/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataTableStatus/>
      </CustomTabPanel>
    </Box>
  </Paper>
</div>

  );
}
