import React from "react";
import { motion } from 'framer-motion';

function SvgBabyCloud({ stroke = "gray", fill = "white", ...props }) {
  return (
    <motion.svg viewBox="0 0 156 90" {...props}>
      <path
        d="M26.775 89.417h94.702s33.146 1.056 33.942-23.942c.651-20.458-12.061-29.545-26.76-29.545 0 0 4.153-35.227-35.053-35.227-29.776 0-34.676 25-34.676 25s-10.093-6.364-16.584-1.515c-6.988 5.22-6.784 10.606-7.161 13.636 0 0-30.822-5.303-34.299 21.59-1.87 14.463 8.057 30.46 25.89 30.003z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />
    </motion.svg>
  );
}

export default SvgBabyCloud;

