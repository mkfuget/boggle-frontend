import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listModules } from '../graphql/queries'
import {AmplifyS3Image} from "@aws-amplify/ui-react";

interface ModuleEntryProps {
    title: string
    description: string
    link: string
}

const ModuleEntry = ({title, description, link}:ModuleEntryProps) => {
    const [icon, setIcon] = useState("");

    const fetchModulePhoto = async () => {
        try {
            const fileAccessURL = await Storage.get("BoggleIcon.JPG", {
                level: 'public',
                bucket: 'module-photos-storage211656-dev',
                region: 'us-west-2',
            });
            //@ts-ignore
            setIcon(fileAccessURL);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchModulePhoto();
    }, [])

    return (
        <a className = "moduleentry card" href = {`/modules${link}`}>
            <img
                src = {icon} 
                alt = "icon"></img> 
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    )
}

export const ModulesList = () => {

    const [modules, setModules] = useState([]); 
    const [modulePhotos, setModulePhotos] = useState({});

    useEffect(() => {
        fetchModules();
    }, [])

    const fetchModules = async () => {
        try {
            const moduleData = await API.graphql(graphqlOperation(listModules));
            //@ts-ignore
            const moduleList = moduleData.data.listModules.items;
            console.log(moduleList);
            setModules(moduleList);
            
        } catch (error) {
            console.log(error);
        }
    } 

    return (
        <div id = "modulelist">
            <h2>Explore Coding Modules</h2>
            {modules.map((element:ModuleEntryProps, index:number) => 
                {
                    return (
                        <ModuleEntry
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

