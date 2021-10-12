import { API } from "aws-amplify";
import React, {useState} from "react"
import "./lesson.css";


const Lesson = () => 
{
    const fetchConceptsData = async () => {
        try {
            const conceptsData: any = await (API.graphql({
              query: getLessons,
              variables: {id: `${moduleName}Concepts`},
              authMode: "AWS_IAM",
            })) 
        } catch (error) {
            console.log(error);
        };
      }
    
    return (
        <div></div>
    )
}
export default Lesson;

