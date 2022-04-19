import React from "react";

export default function Avatar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      viewBox="0 0 20 20"
    >
      <mask id="avatarsRadiusMask">
        <rect width="20" height="20" fill="#fff" rx="0" ry="0"></rect>
      </mask>
      <g mask="url(#avatarsRadiusMask)">
        <path
          fill="#E0B687"
          d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z"
        ></path>
        <path
          fill="#FFF"
          fillOpacity="0.1"
          d="M5 15v-1H4v-1H3v-3H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v3h-1v3h-1v1h-1v1H5z"
        ></path>
        <path fill="#FFF" d="M5 8h2v1H5V8zm7 0h2v1h-2V8z"></path>
        <path fill="#588387" d="M7 8h1v1H7V8zm7 0h1v1h-1V8z"></path>
        <path
          fill="#3b3227"
          fillRule="evenodd"
          d="M6 5h1v1h1v1H5V6h1V5zm7 0h1v1h1v1h-3V6h1V5z"
        ></path>
        <path
          fill="#554838"
          fillOpacity="1"
          d="M3 10v3h1v1h1v1h10v-1h1v-1h1v-3h-3v1H6v-1H3z"
        ></path>
        <path fill="#facbb6" d="M8 13v1h1v-1h3v-1H9v1H8z"></path>
        <path
          fill="#666547"
          d="M3 20v-3h1v-1h3v-1h1v1h1v1h2v-1h1v-1h1v1h3v1h1v3H3z"
        ></path>
        <path
          fill="#FFF"
          fillOpacity="0.2"
          fillRule="evenodd"
          d="M6 16H4v1H3v3h6v-2H8v-1H6v-1zm2 0h1-1zm3 0h1-1zm2 0h1v1h-2v1h-1v2h6v-3h-1v-1h-3z"
        ></path>
        <path
          fill="#554838"
          d="M3 6h1V4h1V3h2v1h1v1h4V4h1V3h2v1h1v2h1V4h-1V3h-1V2H5v1H4v1H3v2z"
        ></path>
      </g>
    </svg>
  );
}

