import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {useSelector} from 'react-redux'
import {getToggle} from './concepts.slice'
import './ConceptsSideBar.css'
import { API, graphqlOperation } from 'aws-amplify'
import { getConceptsData } from '../../graphql/queries'
interface DivContent {
  type: ("paragraph" | "image" | "gif");
  content: string;
}

const ConceptsSideBar = () => {
  const sidebarToggle = useSelector(getToggle);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageContent, setCurrentPageContent] = useState([]);
  const [pagesData, setPagesData] = React.useState([])
  const [currentPageTitle, setCurrentPageTitle] = React.useState("");
  React.useEffect(() => {
    fetchConceptsData();
  }, [])
  const fetchConceptsData = async () => {
    try {
        const conceptsData: any = await API.graphql(graphqlOperation(getConceptsData, { id: "PathFinderConcepts"}));
        setPagesData(conceptsData.data);
        setCurrentPageTitle(conceptsData.data.getConceptsData.pages[0].title);
        setCurrentPageContent(conceptsData.data.getConceptsData.pages[0].content);
    } catch (error) {
        console.log(error);
    };
  }
  return (
    <motion.div 
      id = "conceptssidebar"
      animate ={{
        width: sidebarToggle ? "360px" : "0px"
    }}
    >
    <h2 className = "pagetitle">{currentPageTitle}</h2>
    {currentPageContent.map((row:DivContent) => {
      return (
        <p>{row.content}</p>
      )
    })}
  </motion.div>
  )
}

export default ConceptsSideBar
