import React, {useState} from 'react'

import {Typography, Tag, Radio} from 'antd'

import {motion} from 'framer-motion'

import TeamCard from './TeamCard'

import ethan from '../../assets/people/ethan.png'
import { LinkOutlined} from '@ant-design/icons';

import MemberList from './MemberList'

import useMedia from '../shared/useMedia'
import { useEffect } from 'react'


const {Title, Text} = Typography




const bigContainerVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.4"
        }
    }
}

const memberContainerVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.1"
        }
    }
}



const Team = () => {

    React.useEffect(() => {
        document.title = "HSE Apps | Team"
    })

    const [view,setView] = useState('role')

    const genWidth = () => {

        let winWidth = window.innerWidth * .85

        if(window.innerWidth <= 720){
            return winWidth
        }

        if(winWidth > 300 * 4){
            return  1201

        } else {
            return (Math.floor(winWidth / 300) * 300) + 1

        }

    }

    const [width, setWidth] = useState(genWidth())

    useEffect(() => {
        window.onresize = () => {
            setWidth(genWidth)
        }
    }, [])

    const smallerLayout = useMedia(['(min-width: 1350px)', '(max-width: 1350px)'], [false, true])

    const mobile = useMedia(['(min-width: 500px)', '(max-width: 500px)'], [false, true])

    const smallMobile = useMedia(['(min-width: 350px)', '(max-width: 350px)'], [false, true])



    return(
        <div style={{overflowX:'hidden ',marginTop: "100px", marginBottom: '50px', width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} style={{position: 'static', textAlign: 'center', marginBottom: '10px', zIndex:6}}>
                <Title level={1} style={{color: "#333", marginBottom: "10px"}}>Our Mission</Title>
                <Text>To connect HSE students through a cohesive software ecosystem</Text>
            </motion.div>
            <motion.div  
                style={{marginTop: "10px", width: "100%", display: 'flex', background: "#fafdff", display: "flex", alignItems: "center", flexDirection: "column", position: "static" }}
            >
                <svg style={{marginTop: "20px",filter: "drop-shadow(0px -5px 5px rgb(0,118,220,0.20)", transform: "scaleY(0.5)", position: "absolute", zIndex: "1", top: smallerLayout ? (mobile ?  smallMobile ? 'calc(100% * .50)' : 'calc(100% * .35)' : 'calc(100% * .20)') : "calc(100% * .18)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fafdff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,96C672,107,768,181,864,186.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                {/* <motion.div  initial={{x: "100vh"}} animate={{x: 0, transition: {type: 'spring', duration: 1}}}  style={{marginTop: 'calc(100% * .10)', display: 'flex', zIndex: 4, boxShadow: " 2px 2px 10px rgb(0,118,220,0.1) ", borderRadius: "10px"}}>
                    <div onClick={() => setView("role")} style={{width: "110px", height: "45px", display: 'flex', borderRadius: "10px 0px 0px 10px",justifyContent: 'center', alignItems: "center", background: view == "role" ? "white" : "transparent", boxShadow: view == "role" ? " 2px 2px 10px rgb(0,118,220,0.18) " : "none", cursor: 'pointer'}}>
                        <Text>By Role</Text>
                    </div>
                    <div onClick={() => setView("project")} style={{width: "110px", height: "45px", display: 'flex', borderRadius: "0px 10px 10px 0px",justifyContent: 'center', alignItems: "center", background: view == "project" ? "white" : "transparent", boxShadow: view == "project" ? " 2px 2px 10px rgb(0,118,220,0.18) " : "none", cursor: 'pointer'}}>
                        <Text>By Product</Text>
                    </div>
                </motion.div> */}

                {view == "role" &&
                <motion.div 
                    key={2}
                    variants={bigContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{width: '85%', maxWidth: genWidth(), zIndex: "3",  marginTop: smallerLayout ?  mobile ?' calc(100% * .3)': 'calc(100% * .19)' : 'calc(100% * .14)'}}
                >
                    
                    <MemberList title="Board" noLink={true}>
                        <TeamCard info={{
                                        name: "Preston McCrary", 
                                        li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", 
                                        gh: "https://github.com/prestonmccrary", 
                                        roles: ['Director', 'Fullstack', 'Design']
                                    }}
                        />
                        <TeamCard info={{name: "Arnav Mehra", img: "https://cdn.discordapp.com/attachments/825396901620351006/875637894948204584/latest.png", li: "https://www.linkedin.com/in/arnav-mehra-ab8975193/", gh: "https://github.com/ArnavMeh", roles: ['Fullstack']}}/>
                        <TeamCard info={{name: "Chris Farber", img: "https://cdn.discordapp.com/attachments/627006557321691138/795345177346179132/1583975027966.png", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/farbs03", roles: ['Backend', 'Mobile'], }}/>
                        <TeamCard info={{name: "Aaron Ni", img: "https://cdn.discordapp.com/attachments/627006557321691138/773816409632669736/aaron.png", li: "https://www.linkedin.com/in/aaron-ni/", gh: "https://github.com/Physige", roles: ['Frontend', 'Mobile']}}/>

                    </MemberList>

                    <MemberList title="Members" noLink={true}>
                        <TeamCard info={{name: "Aryadeep Buddha", gh: "https://github.com/AryaBuddha", roles: ['Backend'], img: "https://cdn.discordapp.com/attachments/627006557321691138/773309936981114940/rsz_1arya.png"}}/>
                        <TeamCard info={{name: "Ethan Donahue", li: "https://www.linkedin.com/in/ethan-donahue-69834b197/", gh: "https://github.com/ethandonahue", roles: ['Frontend'], img: ethan}}/>
                        <TeamCard info={{name: "Meglan O'mera", roles: ['Frontend', 'Design'], img: "https://cdn.discordapp.com/attachments/627006557321691138/775133138569527296/unknown.png"}}/>
                        <TeamCard info={{name: "Eric Bedrosian", roles: ['Outreach'], img: "https://cdn.discordapp.com/attachments/626507510085320725/773308830011752499/eric.png"}}/>
                        <TeamCard info={{name: "Ethan Zentz", gh: "https://github.com/ezlikespie", roles: ['Fullstack'], img: "https://prd-mp-images.azureedge.net/6b32ad23-3213-4fdb-b9db-e1825a512362/image/8b36ffe8-aeb4-4bc0-9acb-058dc5b8d68d/about-image.jpg"}}/>
                        <TeamCard info={{name: "Anish Kambhampati", roles: ['Backend'],gh: "https://github.com/kambhani", img: "https://cdn.discordapp.com/attachments/627006557321691138/773349755719385098/anish.png"}}/>
                        <TeamCard info={{name: "Alec Thierion De Monclin", roles: ['Backend'], img: "https://cdn.discordapp.com/attachments/626507510085320725/773350832175054848/alec.png"}}/>
                        <TeamCard info={{name: "Sullivan Schena", roles: ['Frontend'], img: "https://cdn.discordapp.com/attachments/627006557321691138/773365547768479744/unknown.png"}}/>

                    </MemberList>

                   
                </motion.div>
                }
                {/* <motion.div
                    key={1}
                    variants={bigContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{width: "80%", zIndex: "3"}}
                >
                    <MemberList title="Clubs">
                        <TeamCard info={{name: "Preston McCrary", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead']}}/>
                    </MemberList>

                    <MemberList title="Tutoring">
                        <TeamCard info={{name: "Preston McCrary", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead']}}/>
                    </MemberList>

                    <MemberList title="Courses">
                        <TeamCard info={{name: "Arnav Mehra", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary",roles: ['Project Lead'], img: "https://cdn.discordapp.com/attachments/353975020143247360/764959795970965534/20201011_171926.jpg"}}/>
                    </MemberList>
                   
                    <MemberList title="Schedule">
                        <TeamCard info={{name: "Ethan Donahue", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead'], img: ethan}}/>

                    </MemberList>

                    <MemberList title="Busing">
                    <TeamCard info={{name: "Chris Farber", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFLj0i5TFRsPg/profile-displayphoto-shrink_800_800/0?e=1608163200&v=beta&t=E2_7dzX_QW06JVc7zKi4eJMNOCVjunRuTGNTPMrL2U0", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead'], }}/>
                    </MemberList>
                         

                    
                   
                   
                </motion.div> */}
            </motion.div>
        </div>
    )

}

export default Team
