import React, { useState,useEffect, useContext, useCallback } from 'react'; 
import FacebookConnect from '../../../helpers/facebookConnect';
import InstagramLogin from '../../../helpers/instagramConnect';
import { ProfileContext } from '../../context/profileContext';  
import FacebookIcon from '../../../helpers/icons/facebook';
import InstagramIcon from '../../../helpers/icons/instagram';
import TwitterIcon from '../../../helpers/icons/twitterIcon';
import YoutubeIcon from '../../../helpers/icons/youtubeIcon';
import TikTokIcon from '../../../helpers/icons/tiktokIcon';
import LinkedinIcon from '../../../helpers/icons/linkedinIcon';
const SocialConnect = () => {
  const [selectedSocial, setSelectedSocial] = useState('Facebook');
  const [isOpen, setIsOpen] = useState(null);
  const {userFacebbokConnectInformation, getFacebookInformation, facebookLogout} = useContext(ProfileContext);
  const handlerSelect = useCallback((value) => {
    setIsOpen(!isOpen)
    setSelectedSocial(value)
  }, [selectedSocial,isOpen]);
 
  
 
  useEffect(() => {
    getFacebookInformation();
  }, [isOpen]);
 
  let icon;
  let connectButton;
  switch (selectedSocial) {
    case 'Facebook':
      icon = <FacebookIcon/>;
      connectButton = <FacebookConnect/>;
      break;
      case 'Instagram':
        icon = <InstagramIcon />;
        connectButton = <InstagramLogin/>;
        break;
    case 'Twitter':
      icon = <TwitterIcon />;
      connectButton = '';
      break;
    case 'YouTube':
     icon = <YoutubeIcon />;
     connectButton = '';
      break;
      case 'TikTok':
        icon = <TikTokIcon />;
        connectButton = '';
        break;
        case 'LinkedIn':
          icon = <LinkedinIcon />;
          connectButton = '';
          break;
    default:
      icon = null;
      break;
  }
 
  return (
    <div className="edit-block">
      <div className="edit-block__container">
        <div className="edit-block__title">
          <h4>Social networks</h4>
        </div>
        <div className="edit-block__holder">
          <div className="form-group">
            <div className='social-connect'>
              <div className='social-select'>
                <div className='social-select-active-item'>
                  <ul>
                    <li>
                      <div className='item'>
                        <button onClick={() => handlerSelect(selectedSocial)}>
                          {icon}
                          <span>{selectedSocial}</span>
                          <div className='state-icon'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 5L7 9L11 5" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </li>
                  </ul>
                  {connectButton}
                </div>
                <div className={`social-select-items ${isOpen == true ? 'active' : ''}`}>
                  <ul>
                    <li>
                      <div className='item'>
                        <button onClick={() => handlerSelect('Facebook')}>
                          <FacebookIcon/>
                          <span>Facebook</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                      <button onClick={() => handlerSelect('Instagram')}>
                          <InstagramIcon/>
                          <span>Instagram</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                      <button onClick={() => handlerSelect('Twitter')}>
                          <TwitterIcon/>
                          <span>Twitter</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                      <button onClick={() => handlerSelect('YouTube')}>
                         <YoutubeIcon/>
                          <span>YouTube</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                      <button onClick={() => handlerSelect('TikTok')}>
                          <TikTokIcon/>
                          <span>TikTok</span>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                      <button onClick={() => handlerSelect('LinkedIn')}>
                       
                          <LinkedinIcon/> 
                          <span>LinkedIn</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className='social-connect__connected'>
                {userFacebbokConnectInformation != null && userFacebbokConnectInformation.picture != null && userFacebbokConnectInformation.picture.data != null &&  
                  <div className="connected-item">
                      <figure>
                        <img src={userFacebbokConnectInformation.picture.data.url} alt=""/>
                      </figure>
                      <h5>
                        <i>
                         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_22721)">
                              <path d="M24 13.0625C24 19.6899 18.6274 25.0625 12 25.0625C5.37258 25.0625 0 19.6899 0 13.0625C0 6.43508 5.37258 1.0625 12 1.0625C18.6274 1.0625 24 6.43508 24 13.0625Z" fill="url(#paint0_linear_1_22721)" />
                              <path d="M24 13.0625C24 19.6899 18.6274 25.0625 12 25.0625C5.37258 25.0625 0 19.6899 0 13.0625C0 6.43508 5.37258 1.0625 12 1.0625C18.6274 1.0625 24 6.43508 24 13.0625Z" fill="url(#paint1_linear_1_22721)" />
                              <path d="M10.08 16.6625V24.8225C10.08 24.955 10.1875 25.0625 10.32 25.0625H13.68C13.8125 25.0625 13.92 24.955 13.92 24.8225V16.6625C13.92 16.53 14.0275 16.4225 14.16 16.4225H16.56C16.6925 16.4225 16.8 16.315 16.8 16.1825V13.3025C16.8 13.17 16.6925 13.0625 16.56 13.0625H14.16C14.0275 13.0625 13.92 12.9552 13.92 12.8227V10.6625C13.92 9.7025 15.12 9.2225 15.6 9.2225H17.04C17.1725 9.2225 17.28 9.11505 17.28 8.9825V6.1025C17.28 5.96995 17.1726 5.8625 17.04 5.8625H13.92C11.616 5.8625 10.08 8.2625 10.08 9.7025V12.8225C10.08 12.955 9.97255 13.0625 9.84 13.0625H7.44C7.30745 13.0625 7.2 13.17 7.2 13.3025V16.1825C7.2 16.315 7.30745 16.4225 7.44 16.4225H9.84C9.97255 16.4225 10.08 16.53 10.08 16.6625Z" fill="white" />
                            </g>
                            <defs>
                              <linearGradient id="paint0_linear_1_22721" x1="12" y1="1.0625" x2="12" y2="25.0625" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#18ACFE" />
                                <stop offset="1" stopColor="#0165E1" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_1_22721" x1="12" y1="1.0625" x2="12" y2="25.0625" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#18ACFE" />
                                <stop offset="1" stopColor="#0165E1" />
                              </linearGradient>
                              <clipPath id="clip0_1_22721">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.9375)" />
                              </clipPath>
                            </defs>
                          </svg>
                          </i>
                         <a href={userFacebbokConnectInformation.link} target="_blank">{userFacebbokConnectInformation.name}</a> </h5> 
                        <button onClick={facebookLogout}>
                          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.226473 9.1205C-0.0734506 9.42042 -0.0795715 9.95294 0.232594 10.2651C0.55088 10.5773 1.0834 10.5711 1.3772 10.2773L5.00076 6.65379L8.61821 10.2712C8.92425 10.5773 9.45065 10.5773 9.76282 10.2651C10.075 9.94682 10.075 9.42655 9.76894 9.1205L6.15149 5.50306L9.76894 1.8795C10.075 1.57346 10.0811 1.04706 9.76282 0.734894C9.45065 0.42273 8.92425 0.42273 8.61821 0.728774L5.00076 4.34621L1.3772 0.728774C1.0834 0.42885 0.544759 0.416609 0.232594 0.734894C-0.0795715 1.04706 -0.0734506 1.5857 0.226473 1.8795L3.84392 5.50306L0.226473 9.1205Z" fill="white"/>
                          </svg>
                        </button>
                  </div> 
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
