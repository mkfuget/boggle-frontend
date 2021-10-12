import React from 'react'
import Interweave from 'interweave';

interface DivEntryProps {
    type: string;
    content: string
}

export const DivEntry = ({type, content}:DivEntryProps) => {
    switch(type)
    {
        case "paragraph":
            return (
                <p><Interweave content={content}/></p>
            )
    }
}