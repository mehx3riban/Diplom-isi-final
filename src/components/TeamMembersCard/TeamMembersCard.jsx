import React from 'react'
import './TeamMembersCard.scss'
import { TiSocialInstagram } from "react-icons/ti";
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

const TeamMembersCard = ({teamCardImg,memberName,memberPosition,teamCardText}) => {
  return (
    <div>
        <div className=''>
            <div className='Team-card p-lg-2'>

                <div className="Team-card__img">
                    <img src={teamCardImg}  alt="..."/>
                </div>

                <div className="Team-card__content">
                    <h3 className='member-name'>{memberName}</h3>

                    <h6 className='member-position'>{memberPosition} </h6>

                    <p className="team-card-text">{teamCardText}</p>


                    <div className='team-social-icons'>
                        <a  href="" className='team-social-icon' ><span ><TiSocialInstagram/></span></a>
                        <a  href="" className='team-social-icon'><span ><TiSocialTwitter/></span></a>
                        <a  href="" className='team-social-icon'><span><TiSocialFacebook/></span></a>
                    </div>

                
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TeamMembersCard