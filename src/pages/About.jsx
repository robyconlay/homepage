import React from "react"

import { SiCplusplus, SiMysql, SiPhp, SiJavascript, SiJava, SiPython, SiCss3, SiHtml5 } from 'react-icons/si'
import { FaShopware, FaWordpress, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa'

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
    { test: 'Shopware', icon: <FaShopware title="Shopware" /> }
  ];
  const tools = [
    { text: 'NodeJS', icon: <FaNodeJs title='NodeJS' /> },
    { test: 'Git', icon: <FaGitAlt title="Git" /> },
    { test: 'Figma', icon: <FaFigma title='Figma' /> }
  ];

  return (
    <div className='content-container'>
      <div>
        <section>
          <h3>Technologies</h3>
          <h4>
            Languages
          </h4>
          <ul className="technologies">
            {languages.map(item => <li key={item.text}>{item.icon}</li>)}
          </ul>

          <h4>
            Frameworks
          </h4>
          <ul>
            {frameworks.map(item => <li key={item.text}>{item.text}</li>)}
          </ul>
          <h4>
            Tools
          </h4>
          <ul className="technologies">
            {tools.map(item => <li key={item.text}>{item.icon}</li>)}
          </ul>
          <h4>
            CMS
          </h4>
          <ul className="technologies">
            {CMS.map(item => <li key={item.text}>{item.icon}</li>)}
          </ul>
        </section>

        <section>
          <h3>Projects</h3>
          <p>
            Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called
          </p>
        </section>
      </div>
    </div>
  )
}