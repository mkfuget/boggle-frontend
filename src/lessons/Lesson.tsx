import React, {useState} from "react"
import "./lesson.css";


const Lesson = () => 
{
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
        <div></div>
    )
}
export default Lesson;

