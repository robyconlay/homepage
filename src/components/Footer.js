import React from "react";

import '../App.css'

export default function Footer() {

  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Roberto Mazzalai. All Rights Reserved.
      </p>
    </footer>
  )
}