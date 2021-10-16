import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import { TAGS } from 'interweave'
import React, { useEffect, useState } from 'react'
import { ListModulesQuery } from '../API'
import { listModules } from '../graphql/queries'
import { S3PictureCapture } from '../utilitycomponents/S3PictureCapture'

interface ModuleEntryProps {
    title: string
    description: string
    link: string
    pictureLocation: string
    tags: string[]
}

const ModuleEntry = ({title, description, link, pictureLocation, tags}:ModuleEntryProps) => {

    return (
        <a className = "moduleentry card" href = {`/modules${link}`}>
            <div className = "icon">
                <S3PictureCapture 
                    pictureLocation = {pictureLocation}
                />
            </div>
            <h2 className = "title">{title}</h2>
            <div className = "content">
                <p>{description}</p>
                <span className = "tags">Tags: {tags !== null ? tags.join(", ") : ""}</span>
            </div> 
        </a>
    )
}

export const ModulesList = () => {

    const [modules, setModules] = useState< ListModulesQuery | undefined>(undefined); 
    useEffect(() => {
        fetchModules();
    }, [])

    const fetchModules = async () => {
        try {
            const moduleData = await API.graphql({
                query: listModules,
                authMode: 'AWS_IAM'
            }) as { data: ListModulesQuery};
            setModules(moduleData.data);
        } catch (error) {
            console.log(error);
        }
    } 
    if(modules?.listModules?.items)
    {
        return (
            <div className = "module list">
                <h2 className = "pagetile">Explore Coding Modules</h2>
                {modules?.listModules?.items.map((element, index) => 
                    {
                        if(element)
                        {
                            return (
                                <ModuleEntry
                                    key = {`module${index}`}
                                    title = {element.title}
                                    description = {element.description}
                                    link = {element.link}
                                    pictureLocation = {element.pictureLocation}
                                    tags = {element.tags}
                                />
                            )
                        }
                        else
                        {
                            return <div></div>;
                        }
                    })
                }
            </div>
        )
    }
    else
    {
        return (<div></div>)
    }

}


