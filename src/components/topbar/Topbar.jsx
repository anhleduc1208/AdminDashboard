import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import logo from './avatar.jpeg';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="link">
                        <span className="logo ">daadmin</span>
                    </Link>
                    
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={logo} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
