import React, { useState } from "react";
import tw from 'tailwind.macro';

function SvgSun({ fill = "yellow", stroke = "gray", ...props }) {
  return (
    <svg
      viewBox="0 0 61.793 30.159"
      {...props}
    >
      <path
        d="M36.413 2.43l-1.611 6.992m-.466 2.486L31.18 29.781M25.498 2.125l1.711 7.273m.447 2.488l3.525 17.895M17.948 8.419l2.284 3.45m1.139 2.19l9.548 15.75M11.44 14.348l2.79 2.189m2.008 1.63L31.18 29.78M6.493 21.456l3.916 1.383m2.468.872l18.304 6.07M31.181 29.781l17.075-5.687m3.387-1.17l3.782-1.309M31.181 29.781L45.08 18.764m2.096-1.71l3.088-2.472M31.181 29.781L40.194 14.8m1.142-2.485l2.795-4.392M30.512 29.863l17.997.048m3.583-.032l4.002-.035M30.849 29.863l-17.997.048m-3.583-.032l-4.002-.035"
        opacity={1}
        fill="none"
        stroke={stroke}
        strokeWidth="1%"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.976 19.63A10.184 10.242 0 0020.79 29.87a10.184 10.242 0 00.01.268h20.345a10.184 10.242 0 00.014-.267 10.184 10.242 0 00-10.185-10.242z"
        fill={fill}
        fillOpacity="1"
        stroke={stroke}
        strokeWidth="1%"
        transform="translate(0, 0.5)"
        onClick={() => setState({ ...state, centerColor: nextColor(state.centerColor) })}
      />
    </svg>
  );
}

export default SvgSun;

