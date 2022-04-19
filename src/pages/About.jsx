import React from "react"

import { SiCplusplus, SiMysql, SiPhp, SiJavascript, SiJava, SiPython, SiCss3, SiHtml5, SiAndroidstudio } from 'react-icons/si'
import { FaShopware, FaWordpress, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa'

import styles from './About.module.css'
import styled from "styled-components";

export default function About() {
  const languages = [
    { text: 'HTML', icon: <SiHtml5 title="HTML5" /> },
    { text: 'CSS', icon: <SiCss3 title="CSS" /> },
    { text: 'Javascript', icon: <SiJavascript title="Javascript" /> },
    { text: 'Python', icon: <SiPython title="Python" /> },
    { text: 'Php', icon: <SiPhp title="Php" /> },
    { text: 'Java', icon: <SiJava title="Java" /> },
    { text: 'C++', icon: <SiCplusplus title="C++" /> },
    { text: 'MySQL', icon: <SiMysql title="MySql" /> },
  ];
  const frameworks = [
    { text: 'ExpressJs', icon: null },
    { text: 'ReactJS', icon: null },
    { text: 'React Native', icon: null },
  ];
  const CMS = [
    { text: 'Wordpress', icon: <FaWordpress title='Wordpress' /> },
    { text: 'Shopware', icon: <FaShopware title="Shopware" /> }
  ];
  const tools = [
    { text: 'NodeJS', icon: <FaNodeJs title='NodeJS' /> },
    { text: 'Git', icon: <FaGitAlt title="Git" /> },
    { text: 'Figma', icon: <FaFigma title='Figma' /> },
    { text: 'Android Studio', icon: <SiAndroidstudio title='Android Studio' /> },
  ];

  return (
    <div className='content-container'>
      <div>
        <section>
          <h3>Technologies</h3>
          <h4>
            Languages
          </h4>
          <List>
            {languages.map(item => <Item className={styles.item} key={item.text}>{item.icon}</Item>)}
          </List>

          <h4>
            Frameworks
          </h4>
          <List>
            {frameworks.map(item => <Item className={styles.item} key={item.text}>{item.text}</Item>)}
          </List>
          <h4>
            Tools
          </h4>
          <List>
            {tools.map(item => <Item className={styles.item} key={item.text}>{item.icon}</Item>)}
          </List>
          <h4>
            CMS
          </h4>
          <List>
            {CMS.map(item => <Item className={styles.item} key={item.text}>{item.icon}</Item>)}
          </List>
        </section>

        <section>
          <h3>Projects</h3>
          <p>
            Lorem ipsum dolor sit ament.
          </p>
        </section>
      </div>
    </div>
  )
}

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  display: inline;
  padding: 0 10px;
`