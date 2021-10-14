import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listLessons, listModules } from '../graphql/queries'

interface LessonEntryProps {
    title: string
    description: string
    link: string
    id: string
}

const LessonEntry = ({title, description, link, id}:LessonEntryProps) => {
    return (
        <a className = "lessonentry card" href = {`/lessons/${id}`}>
            <h2 className = "title">{title}</h2>
        </a>
    )
}

export const LessonsList = () => {

    const [lessons, setLessons] = useState([]); 
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetchLessons();
    }, [])

    const fetchLessons = async () => {
        try {
            const LessonData = await API.graphql({
                query: listLessons,
                authMode: 'AWS_IAM'
            });
            console.log(LessonData);
            //@ts-ignore
            const lessonList = LessonData.data.listLessons.items;
            setLoaded(true);
            setLessons(lessonList);
            
        } catch (error) {
            console.log(error);
        }
    } 
    if(loaded)
    {
        return (
            <div className = "Lesson list">
                <h2 className = "pagetile">Explore Codinc Concepts</h2>
                {lessons.map((element:LessonEntryProps, index:number) => 
                    {
                        return (
                            <LessonEntry
                                key = {element.id}
                                id = {element.id}
                                title = {element.title}
                                description = {element.description}
                                link = {element.link}
                            />
                        )
                    })
                }
            </div>
            
        )
    }
    return (<div></div>)

}

