import React from "react";

export default function SocialLinkItem(props) {
  const { url, username, icon } = props;

  return (
    <li>
      <a href={url} target='_blank' className="link no-decoration">
        {icon}
        {username}
      </a>
    </li>
  )
}