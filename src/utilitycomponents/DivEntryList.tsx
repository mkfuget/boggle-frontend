import React from 'react'
import Interweave from 'interweave';
import { S3PictureCapture } from './S3PictureCapture';
interface DivEntryList {
    list: DivEntryProps[];
}
interface DivEntryProps {
    type: string;
    content: string
}

const DivEntry = ({type, content}:DivEntryProps) => {
    switch(type)
    {
        case "paragraph":
            return (
                <p><Interweave content={content}/></p>
            )
        case "figure":
            return (
                <div className = "figure"><Interweave content={content}/></div>
            )
        case "image": 
            return (
                <S3PictureCapture pictureLocation = {content}/>
            )
        default:
            return <div></div>

    }
}

export const DivEntryList = ({list}:DivEntryList ) =>{
    return (
        <div className = "divcontentlist">
            {list.map((x: DivEntryProps) => {
                return (
                <DivEntry 
                    type = {x.type}
                    content = {x.content}
                />);
            })}
        </div>
    )
}