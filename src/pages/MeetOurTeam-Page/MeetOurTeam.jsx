import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './MeetOurTeam.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import ourTeamHeaderImg from '../../assets/images/our-menu-page/Team-title-area-parallax-img-2.jpg'
import ProgressBar from "@ramonak/react-progress-bar";
import TeamMembersCard from '../../components/TeamMembersCard/TeamMembersCard'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import Progress from '../../components/ProgressBar/Progress'

const MeetOurTeam = () => {

    const [memberData , setMemberData] = useState(null)
    useEffect(()=>{
     axios.get('/src/json/TeamMembers.json')
    .then (melumat => setMemberData(melumat.data))
})
  return (
    <div>
         <PagesHeader headerImg={ourTeamHeaderImg} strength='200' headerText='meet our team' />
         <div className='our-team-section'>

            <div className='row'>
                {memberData &&
                    memberData.map(birMemberMelumati=>(
                        <div className='col-12 col-md-6 col-lg-4 member-col '>
                        <TeamMembersCard 
                        teamCardImg={birMemberMelumati.MemberCardImg}
                        memberName={birMemberMelumati.MemberName}
                        memberPosition={birMemberMelumati.MemberPosition}
                        teamCardText={birMemberMelumati.MemberCardText}
                        />
                        </div>   
                        
                    ))   
                }
            </div>
 
         </div>
        <div className='team-members_skills '>
            <div className='row'>
                
                <div className='col-12 col-lg-6 team-members-left'>
                    <SectionHeading classAdiHeader='section-heading-left'  sectionHeadingh4='Application' classAdih4='light' classAdih2='dark' sectionHeadingh2='OUR SKILLS' classAdiDivider='divider-brown-left' />
                    <p className='class-p team-members-text' >Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id.</p>
                </div>

                
                <div className='col-12 col-lg-6  team-members-right '>

                    <div className='our-team_skills'>
                        <Progress skillName='DESIGN' percentage='92'/>
                        <Progress skillName='DEVELOPMENT' percentage='67'/>
                        <Progress skillName='USER EXPERIENCE' percentage='73'/>
                    </div>
                   

                
                </div>
               
               
            </div>
            

        </div>
    </div>
  )
}

export default MeetOurTeam