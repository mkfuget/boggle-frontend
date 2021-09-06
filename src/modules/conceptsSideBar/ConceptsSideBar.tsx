import React from 'react'
import { motion } from "framer-motion"
import {useSelector} from 'react-redux'
import {getToggle} from './concepts.slice'
import './ConceptsSideBar.css'
const ConceptsSideBar = () => {
  const sidebarToggle = useSelector(getToggle);
  return (
    <motion.div 
      id = "conceptssidebar"
      animate ={{
        width: sidebarToggle ? "360px" : "0px"
    }}
  >
    </motion.div>
  )
}

export default ConceptsSideBar
