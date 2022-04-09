import React from "react";
import SocialLinkItem from "../components/SocialLink/SocialLink";

import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiMyanimelist } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineFilePdf } from 'react-icons/ai'
import Bio from "../components/Bio/Bio";

import styles from './Home.module.css'

import Avatar from '../Avatar'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-male-sprites';

export default function Home() {


  let avatar = createAvatar(style, {
    seed: 'robyconlay',
    // ... and other options
  });

  // console.log(avatar)

  return (
    <div className='content-container'>
      <div className={styles.home_title}>

        <h2 className={styles.title}>
          Roberto Mazzalai
        </h2>
        <div className={styles.subtitle}>
          Graduate in Computer Science
        </div>
        {/* <img src={avatar} className={styles.avatar} /> */}
        <Avatar className={styles.avatar} />
      </div>

      <section>
        <h3>Who is he</h3>
        <p>
          Roberto is a graduate of the University of Trento in the course of Computer Science.


          Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called
        </p>
      </section>


      <section>
        <h3>Bio</h3>
        <ul>
          <Bio year='1999' text='Born in Trento, Italy.' />
          <Bio year='2021' text='Completed a stage at 426 agency.' />
          <Bio year='2022' text='Degree in Computer Science in the University of Trento' />
        </ul>
      </section>

      <section>
        <h3>Links</h3>
        <ul className={styles.social_link_list}>
          <SocialLinkItem url='https://github.com/robyconlay' icon={<FaGithub />} displayText='@robyconlay' />
          <SocialLinkItem url='' icon={<FaInstagram />} displayText='@roby_con_la_y (private)' />
          <SocialLinkItem url='https://myanimelist.net/profile/robyconlay' icon={<SiMyanimelist />} displayText='@robyconlay' />
          <SocialLinkItem url='mazzalairob@gmail.com' icon={<MdOutlineEmail />} displayText='mazzalairob@gmail.com' /> {/* not a link */}
          <SocialLinkItem url={require('../CV_Roberto_Mazzalai.pdf')} icon={<AiOutlineFilePdf />} displayText='Curriculum Vitae' /> {/* not a link */}
        </ul>
      </section>
    </div>
  )
}