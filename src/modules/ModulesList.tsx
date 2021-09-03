import { GraphQLResult } from '@aws-amplify/api'
import { graphqlOperation, API} from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { listModules } from '../graphql/queries'

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
        <div>ModuleList</div>
    )

}

