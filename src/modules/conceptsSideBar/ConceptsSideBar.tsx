import React, {useState } from 'react'
import { motion } from "framer-motion"
import {useSelector} from 'react-redux'
import {getToggle} from './concepts.slice'
import './ConceptsSideBar.css'
import { API, graphqlOperation } from 'aws-amplify'
import { getConceptsData, listConceptsData } from '../../graphql/queries'
import { useParams } from 'react-router-dom'
import Interweave from 'interweave';
import { GetConceptsDataQuery } from '../../API'
interface DivContent {
  type: ("paragraph" | "image" | "gif" |"figure");
  content: string;
}

interface PageData {
  title: string;
  content: DivContent[];
}

interface ConceptsData {
  data: PageData[]
}
type moduleName = {
  moduleName: string
}
const ConceptsSideBar = () => {
  const sidebarToggle = useSelector(getToggle);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageContent, setCurrentPageContent] = useState<DivContent>();
  const { moduleName } = useParams<moduleName>();
  const [pagesData, setPagesData] = React.useState<ConceptsData>({
    data: [{
      title: "",
      content: [{
        type: "paragraph",
        content: "",
      }],
    }]
  })
  const [maxPages, setMaxPages] = useState(0);


  React.useEffect(() => {
    fetchConceptsData();
  }, [])

  const pageUp = () => {
    const maxPages = pagesData.data.length;
    if(currentPage < maxPages - 1)
    {
      setCurrentPage(currentPage + 1);
    }
  }

  const pageDown = () => {
    if(currentPage > 0)
    {
      setCurrentPage(currentPage - 1);
    }
  }

  const fetchConceptsData = async () => {
    try {
        const conceptsData: any = await (API.graphql({
          query: getConceptsData,
          variables: {id: `${moduleName}Concepts`},
          authMode: "AWS_IAM",
        })) 
        setPagesData({data: conceptsData.data.getConceptsData.pages});
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
    <h2 className = "pagetitle">{pagesData.data[currentPage].title}</h2>
    {pagesData.data[currentPage].content.map((row:DivContent) => {
      return (
        <p><Interweave content={row.content}/></p>
      )
    })}
    <div className = "footer">
      <button 
        className = "last pagebutton"
        onClick = {pageDown}
        >-
        </button>
        {currentPage + 1}/{pagesData.data.length}
        <button 
          className = "next pagebutton"
          onClick = {pageUp}
        >+
        </button>
    </div>
  </motion.div>
  )
}

export default ConceptsSideBar
