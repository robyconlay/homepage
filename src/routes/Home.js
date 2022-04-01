import React from "react";
import SocialLinkItem from "../components/SocialLink";

import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiMyanimelist } from 'react-icons/si';

export default function Home() {
  return (
    <div>
      <h2>
        Roberto Mazzalai
      </h2>
      <div>
        Software Developer
      </div>

      <section>
        <h3>Work</h3>
        <p>
          Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called
        </p>
      </section>


      <section>
        <h3>Bio</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Turpis egestas sed tempus urna et pharetra pharetra massa. Sed tempus urna et pharetra pharetra massa. Sagittis orci a scelerisque purus semper eget duis at. Nibh nisl condimentum id venenatis a condimentum. Adipiscing elit ut aliquam purus sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Odio ut sem nulla pharetra. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Faucibus vitae aliquet nec ullamcorper sit amet risus. Lacus luctus accumsan tortor posuere ac ut consequat. Molestie nunc non blandit massa. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Magna fringilla urna porttitor rhoncus dolor purus non. Proin fermentum leo vel orci porta non.        </p>
      </section>

      <section>
        <h3>Hobbys</h3>
        <p>
          Iaculis at erat pellentesque adipiscing commodo. Accumsan tortor posuere ac ut. Lectus mauris ultrices eros in cursus turpis. Odio eu feugiat pretium nibh ipsum consequat nisl. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Nisi lacus sed viverra tellus in. Senectus et netus et malesuada fames ac. Magna fringilla urna porttitor rhoncus. In hac habitasse platea dictumst quisque sagittis purus sit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Enim facilisis gravida neque convallis a. Enim blandit volutpat maecenas volutpat. At in tellus integer feugiat scelerisque varius. Tristique risus nec feugiat in fermentum. Nunc id cursus metus aliquam eleifend mi in nulla. Cursus turpis massa tincidunt dui ut ornare lectus.
        </p>
      </section>

      <section>
        <h3>Links</h3>
        <ul>
          <SocialLinkItem url='' icon={<FaGithub />} username='@robyconlay' />
          <SocialLinkItem url='' icon={<FaInstagram />} username='@roby_con_la_y (private)' />
          <SocialLinkItem url='https://myanimelist.net/profile/robyconlay' icon={<SiMyanimelist />} username='@robyconlay' />
        </ul>
      </section>
    </div>
  )
}