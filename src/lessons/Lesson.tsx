import { API } from "aws-amplify";
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { GetLessonQuery } from "../API";
import { getLesson } from "../graphql/queries";
import { DivEntryList } from "../utilitycomponents/DivEntryList";
import "./lesson.css";
type lessonName = {
    lessonName: string
  }

interface lessonData{
    content: string[];
    code: string[];
    title: string;
}
const Lesson = () => 
{
    const { lessonName } = useParams<lessonName>();
    const [lesson, setLesson] = useState<GetLessonQuery | undefined>(undefined); 

    const fetchLessonData = async () => {
        try {
            const LessonData = await (API.graphql({
              query: getLesson,
              variables: {id: `${lessonName}`},
              authMode: "AWS_IAM",
            })) as { data: GetLessonQuery}
            setLesson(LessonData.data);
        } catch (error) {
            console.log(error);
        };
    }
    useEffect(() =>{
        fetchLessonData();
    }, [])
    if(lesson?.getLesson)
    {
        return (
            <div className = "lesson">
                <h2 className = "pagetitle">{lesson?.getLesson?.title}</h2>

                <div className = "content">
                    <DivEntryList list = {lesson?.getLesson?.content}/>
                    <div className = "code">
                        {lesson?.getLesson?.code.map((element, index) => {
                           return (<>
                               <div className = "index">{index + 1}</div> 
                               <div className = "codeline">{element}</div> 
                            </>)
                        })}
                    </div>
                </div>
            </div>
        )    
    }
    return <div></div>
}
export default Lesson;

