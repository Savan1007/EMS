import React from 'react';
import * as MDicons from "react-icons/md";
import * as BSicons from "react-icons/bs";
import * as FAicons from "react-icons/fa";
import * as BIicons from "react-icons/bi";
import * as RIicons from "react-icons/ri";

import './Navbar.css'
export const SidebarData = [{
        i_no: '1',
        title: 'Dashboard',
        path: './Dashboard',
        icon: < MDicons.MdDashboard / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '2',
        title: 'Department',
        path: './Department',
        icon: < BSicons.BsFillPeopleFill / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '3',
        title: 'Projects',
        path: './Projects',
        icon: < FAicons.FaProjectDiagram / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '4',
        title: 'Tasks',
        path: './Tasks',
        icon: < FAicons.FaTasks / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '5',
        title: 'Attandance',
        path: './Attandance',
        icon: < RIicons.RiCalendarCheckFill / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '6',
        title: 'Leave',
        path: './Leave',
        icon: < FAicons.FaUserAltSlash / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '7',
        title: 'Salary',
        path: './Salary',
        icon: < RIicons.RiDatabase2Fill / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
    {
        i_no: '8',
        title: 'Events',
        path: './Events',
        icon: < BIicons.BiCalendarEvent / > ,
        cName: 'nav-text',
        aLink: 'active'
    },
]