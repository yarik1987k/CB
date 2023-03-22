import React, { useState } from 'react';
import './../css/tabsStyle.scss';
const ProfileTabs = ({tabs, activeTab}) =>{
     
    

    const [currentTab, setCurrentTab] = useState(activeTab);
    const handleTabClick = (e, tab) => {
        e.preventDefault();
        setCurrentTab(tab);
      };

     
      return (
        <div className="tabs">
            <div className="tabs-header">
                <ul className="tabs-list">
                    {tabs.map((tab, index) => (
                      
                        <li key={index} className="tabs-list-item"> 
                            <button
                            href="#"
                            className={`tabs-list-item-link tab-btn ${currentTab.label === tab.label ? 'active' : ''}`}
                            onClick={(e) => handleTabClick(e, tab)}
                            >
                            {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
          <div className="tabs-content">
            {tabs.map((tab, index) => (
              <div key={index} className={`tab-pane ${currentTab.label === tab.label ? 'active' : ''}`}>
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      );
}

export default ProfileTabs;