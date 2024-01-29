import Search from "../search/search"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './sub-header.scss'
import { useState } from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SubHeaderComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className='sub-header-desktop'>
      <div className="sub-header-desktop__main">
        <div className="sub-header-desktop__main--title"> <h1>Mercado Play</h1></div>
        <span className="sub-header-desktop__main--vertical-divider"></span>
        <div className="sub-header-desktop__main--search">
          <Search />
        </div>
      </div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="sub-header-desktop__tabs">
          <Tab label="Para ti" {...a11yProps(0)} />
          <Tab label="Mas videos" {...a11yProps(1)} />
          <Tab label="Peliculas" {...a11yProps(2)} />
          <Tab label="Series" {...a11yProps(2)} />
          <Tab label="Infantil" {...a11yProps(2)} />
        </Tabs>
    </section>
  )
}

export default SubHeaderComponent
