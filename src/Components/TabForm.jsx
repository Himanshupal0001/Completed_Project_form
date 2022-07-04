import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';
import { useState } from 'react';
import Comp1 from './Comp1';
import RetroPlan from './RetroPlan';
import DesignDept from './DesignDept';
import ProjectDept from './ProjectDept';
import CAR from './CAR';
import Installation from './installation';
import Accounts from './Accounts';
import Production from './Production';

export default function TabForm() {

    const [state, setState] = useState(0);
    const handleTabs = (e, val) => {
        setState(val);
        console.log(val)
    }

    return (
        <div className='form'>
            <Paper className='paper'>
                <Tabs value={state} onChange={handleTabs}
                    // orientation='vertical'
                    scrollButtons='auto'
                    variant='scrollable'
                    sx={{ borderRight: 1, borderColor: 'divider' }}>
                    <Tab label='Quotation no'></Tab>
                    <Tab label='Retro Plan'></Tab>
                    <Tab label='Design Deptartment'></Tab>
                    <Tab label='Project Deptartment'></Tab>
                    <Tab label='Production'></Tab>
                    <Tab label='CAR'></Tab>
                    <Tab label='Installation'></Tab>
                    <Tab label='Accounts'></Tab>
                </Tabs>
                <div style={{ width: '100%', height: '15px', backgroundColor: '#000', color: '#fff' }}> Quotation number &nbsp; &nbsp; Job id &nbsp; &nbsp; Project Manager</div>
                <div className='tab-panel'>
                    <TabPanel value={state} index={0}><Comp1 /></TabPanel>
                    <TabPanel value={state} index={1}><RetroPlan /></TabPanel>
                    <TabPanel value={state} index={2}><DesignDept /></TabPanel>
                    <TabPanel value={state} index={3}><ProjectDept /></TabPanel>
                    <TabPanel value={state} index={4}><Production /></TabPanel>
                    <TabPanel value={state} index={5}><CAR /></TabPanel>
                    <TabPanel value={state} index={6}><Installation /></TabPanel>
                    <TabPanel value={state} index={7}><Accounts /></TabPanel>
                    <TabPanel value={state} index={8}>item6</TabPanel>
                </div>
            </Paper>
        </div>

    )
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {value === index && (
                <div>{children}</div>
            )}
        </div>


    )
}
