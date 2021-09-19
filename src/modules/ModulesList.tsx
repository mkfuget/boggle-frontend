import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listModules } from '../graphql/queries'

interface ModuleEntryProps {
    title: string
    description: string
    link: string
    pictureLocation: string
}

const ModuleEntry = ({title, description, link, pictureLocation}:ModuleEntryProps) => {
    const [icon, setIcon] = useState("");
    console.log(pictureLocation);
    const fetchModulePhoto = async () => {
        try {
            const photoData = await Storage.get(pictureLocation, {
                level: 'public',
                bucket: 'module-photos-storage211656-dev',
                region: 'us-west-2',
            });
            //@ts-ignore
            setIcon(photoData);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchModulePhoto();
    }, [])

    return (
        
        <a className = "moduleentry card" href = {`/modules${link}`}>
            <div className = "icon">
                <img
                    src = {icon} 
                    alt = "icon">
                </img>
            </div>
            <h2>{title}</h2>
            <div className = "content">
                <p>{description}</p>
            </div> 

        </a>
    )
}

export const ModulesList = () => {

    const [modules, setModules] = useState([]); 

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
                            pictureLocation = {element.pictureLocation}
                        />
                    )
                })
            }
        </div>
    )

}

