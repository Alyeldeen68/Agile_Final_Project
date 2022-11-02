import React from "react";
import "./Item.css";
import { Dashboard } from "@mui/icons-material";
import { motion } from "framer-motion";
const Item = ({ icon, name }) => {
  const subheading = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };
  const itemVariable = {
    true: {},
    false: {
      paddingLeft: "0px",
      justifyContent: "center",
    },
  };
  return (
    <motion.div
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0px 8px 32px rgba(31, 38, 135, 0.37)",
        borderRadius: "1rem 1rem 1rem 1rem",
        backdroFilter: "blur(5.5px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        webkitBackdropFilter: "blur(5.5px)",
        cursor: "pointer",
      }}
      transition={{
        type: "none",
        duration: 0.1,
      }}
      variants={itemVariable}
      className="main-item"
    >
      <motion.div className="icon">{icon}</motion.div>
      <motion.span variants={subheading}>{name}</motion.span>
    </motion.div>
  );
};
export default Item;
