import React from "react"; 
import ProfileCompanies from "./subComponents/profileCompanies";
import ProfileCommunities from "./subComponents/profileCommunities";
import ProfileTabs from "./profileTabs";
import TabHaveAccess from "./tabHaveAccess";
import TabCardMarket from "./tabCardMarket";
import TabReviews from "./tabReviews";
const ProfileMAinBlock = ({companiesAssign}) =>{ 
    const assigned_companies = companiesAssign;
    const communities = companiesAssign
 
    const tabs = [
        {
          label: 'Have access to',
          content: <TabHaveAccess/>,
        },
        {
          label: 'CardMarket',
          content: <TabCardMarket/>,
        },
        {
          label: 'Reviews',
          content: <TabReviews/>,
        },
      ];

    return(
        <div className="user-info__main-block">
            <div className="user-info__main-block__left">
                <ProfileTabs tabs={tabs} activeTab={tabs[0]} />
            </div>
            <div className="user-info__main-block__right">
                {assigned_companies && <ProfileCompanies data={assigned_companies}></ProfileCompanies> }
                {communities && <ProfileCommunities data={communities}></ProfileCommunities> }
            </div>
        </div>
    );
}

export default ProfileMAinBlock;