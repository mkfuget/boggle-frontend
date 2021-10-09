import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listLessons, listModules } from '../graphql/queries'

interface LessonEntryProps {
    title: string
    description: string
    link: string
}

const LessonEntry = ({title, description, link}:LessonEntryProps) => {
    return (
        <a className = "moduleentry card" href = {`/lessons${link}`}>
            <h2 className = "cardtitle">{title}</h2>
            <div className = "content">
                <p>{description}</p>
            </div> 
        </a>
    )
}

export const ModulesList = () => {

    const [lessons, setLessons] = useState([]); 
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetchModules();
    }, [])

    const fetchModules = async () => {
        try {
            const LessonData = await API.graphql({
                query: listLessons,
                authMode: 'AWS_IAM'
            });
            //@ts-ignore
            const lessonList = LessonData.data.listModules.items;
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
                                key = {`module${index}`}
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

