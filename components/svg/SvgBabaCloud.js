import React from 'react';
import { motion } from 'framer-motion';

function SvgBabaCloud({ stroke = "gray", fill = "white", ...props }) {
  return (
    <motion.svg viewBox="0 0 300 150" {...props}>
      <path
        d="M22.327 148.843h267.285s26.003-53.514-9.257-85.492-79.304 9.888-79.304 9.888S223.967.401 143.82 1.175C63.673 1.948 92.825 75.3 92.825 75.3s-31.154-49.647-73.612-6.659c-42.457 42.989 3.114 80.201 3.114 80.201z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1"
      />
    </motion.svg>
  );
}

export default SvgBabaCloud;
