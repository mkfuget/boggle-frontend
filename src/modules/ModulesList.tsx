import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API, Storage} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listModules } from '../graphql/queries'

interface ModuleEntryProps {
    title: string
    description: string
    link: string
    pictureLocation: string
    tags: string[]
}

const ModuleEntry = ({title, description, link, pictureLocation, tags}:ModuleEntryProps) => {
    const [icon, setIcon] = useState("");
    const [photoLoaded, setPhotoLoaded] = useState(false);


    const fetchModulePhoto = async () => {
        try {
            const photoData = await Storage.get(pictureLocation, {
                level: 'public',
                bucket: 'module-photos-storage211656-dev',
                region: 'us-west-2',
            });
            //@ts-ignore
            setIcon(photoData);
            setPhotoLoaded(true);
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
                {photoLoaded ? <img
                    src = {icon} 
                    alt = "icon">
                </img> : ""}
            </div>
            <h2 className = "cardtitle">{title}</h2>
            <div className = "content">
                <p>{description}</p>
                <span className = "tags">Tags: {tags !== null ? tags.join(", ") : ""}</span>
            </div> 

        </a>
    )
}

export const ModulesList = () => {

    const [modules, setModules] = useState([]); 
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetchModules();
    }, [])

    const fetchModules = async () => {
        try {
            const moduleData = await API.graphql(graphqlOperation(listModules));
            //@ts-ignore
            const moduleList = moduleData.data.listModules.items;
            setLoaded(true);
            setModules(moduleList);
            
        } catch (error) {
            console.log(error);
        }
    } 
    if(loaded)
    {
        return (
            <div id = "modulelist">
                <h2 className = "pagetile">Explore Coding Modules</h2>
                {modules.map((element:ModuleEntryProps, index:number) => 
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
                    })
                }
            </div>
            
        )
    }
    return (<div></div>)

}

