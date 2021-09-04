import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listModules } from '../graphql/queries'
interface ModuleEntryProps {
    title: string
    description: string
    link: string
}

const ModuleEntry = ({title, description, link}:ModuleEntryProps) => {
    return (
        <a className = "moduleentry card" href = {`/modules${link}`}>
            <h2>{title}</h2>
            <p>{description}</p>
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
    console.log(modules);

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

