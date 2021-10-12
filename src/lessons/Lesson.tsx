import { API } from "aws-amplify";
import React, {useState} from "react"
import { useParams } from "react-router-dom";
import { getLesson } from "../graphql/queries";
import "./lesson.css";
type lessonName = {
    lessonName: string
  }
  
const Lesson = () => 
{
    const { lessonName } = useParams<lessonName>();

    const fetchConceptsData = async () => {
        try {
            const conceptsData: any = await (API.graphql({
              query: getLesson,
              variables: {id: `${lessonName}Concepts`},
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

