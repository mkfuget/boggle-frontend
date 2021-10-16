import { useEffect, useState } from "react";
import { graphqlOperation, API, Storage} from 'aws-amplify'
interface PictureStats {
    pictureLocation:string,
}
export const S3PictureCapture = ({pictureLocation}: PictureStats) => {
    const [photo, setPhoto] = useState("");
    const [photoLoaded, setPhotoLoaded] = useState(false);

    const fetchPhoto = async () => {
        try {
            const photoData: any = await Storage.get(pictureLocation, {
                level: 'public',
                bucket: 'module-photos-storage211656-dev',
                region: 'us-west-2',
            });
            setPhoto(photoData);
            setPhotoLoaded(true);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=>{
        fetchPhoto();
    }, []);
    if(photoLoaded)
    {
        return (
            <img
                src = {photo} 
                alt = "icon"
            >
            </img>
        )
    }
    return (  
        <div></div>
    )


}