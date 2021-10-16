import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { ListLessonsQuery } from '../API'
import { listLessons, listModules } from '../graphql/queries'
import "./lesson.css"
interface LessonEntryProps {
    title: string
    link: string
    description: string
}

const LessonEntry = ({title, link, description}:LessonEntryProps) => {
    return (
        <a className = "lessonentry card" href = {`/lessons/${link}`}>
            <h2 className = "title">{title}</h2>
            <p className = "description">{description}</p>
        </a>
    )
}

export const LessonsList = () => {

    const [lessons, setLessons] = useState<ListLessonsQuery | undefined>(undefined); 
    useEffect(() => {
        fetchLessons();
    }, [])

    const fetchLessons = async () => {
        try {
            const LessonData = await API.graphql({
                query: listLessons,
                authMode: 'AWS_IAM'
            }) as { data: ListLessonsQuery};
            setLessons(LessonData.data);
            
        } catch (error) {
            console.log(error);
        }
    } 
    if(lessons?.listLessons?.items)
    {
        return (
            <div className = "lesson list">
                <h2 className = "pagetile">Explore Coding Concepts</h2>
                {lessons?.listLessons?.items.map((element, index) => 
                    {
                        if(element)
                        {
                            return (
                                <LessonEntry
                                    key = {element.id}
                                    title = {element.title}
                                    description = {element.description}
                                    link = {element.id}
                                />
                            )
                        }
                        else
                        {
                            return <div></div>
                        }
                    })
                }
                
            </div>
            
        )
    }
    return (<div></div>)

}

