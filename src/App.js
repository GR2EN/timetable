import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AppBar, Box, Tab, Tabs, useTheme} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Monday from './days/Monday'
import Tuesday from './days/Tuesday'
import Wednesday from './days/Wednesday'
import Thursday from './days/Thursday'
import Friday from './days/Friday'

function TabPanel(props) {
  const { children } = props;
  return(
      <Box>
        {children}
      </Box>
  );
}

function App() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <BrowserRouter>
      <AppBar
          position='static'
          color='default'>
        <Tabs
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            value={value}
            onChange={handleChange}>
          <Tab label='ПН'  />
          <Tab label='ВТ'  />
          <Tab label='СР'  />
          <Tab label='ЧТ'  />
          <Tab label='ПТ'  />
        </Tabs>
      </AppBar>
      <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Monday/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tuesday/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Wednesday/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Thursday/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Friday/>
        </TabPanel>
      </SwipeableViews>
    </BrowserRouter>
  );
}

export default App
