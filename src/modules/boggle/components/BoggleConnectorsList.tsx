
import {useSelector} from 'react-redux'
import {getChainData} from '../reducers/boggle.slice'
import * as Constants from '../constants'
import './BoggleBoard.css'


interface Segment{
    startPoint: Constants.Point
    endPoint: Constants.Point
}

export const BoggleConnectorsList = () => {
    const indexChain = useSelector(getChainData);
    let segmentList: Segment[] = [];
    for(let i=0; i<indexChain.length - 1; i++)
    {
        segmentList.push({
            startPoint: indexChain[i],
            endPoint: indexChain[i+1]
        })
    }
    return (
    <div className = "connectorlist">
        {segmentList.map((currentSegment:Segment, index:number) => (
            <Connector 
                key = {`connector${index}`}
                segment = {currentSegment}
            />
        ))}
    </div>
    )
}
type ConnectorProps = {segment: Segment} 
const Connector = ({segment}:ConnectorProps) =>
{
    const deltaX = segment.startPoint.xIndex - segment.endPoint.xIndex;
    const deltaY = segment.startPoint.yIndex - segment.endPoint.yIndex;
    const cellSepartion = 44;
    let className:string;
    if(deltaX !== 0 && deltaY !== 0)
    {
        className = "diagonal connector"
    }
    else 
    {
        className = "straight connector"
    }
    const rotation = (Math.atan2(deltaY, deltaX) * 180 / Math.PI + 90)%360;
    const styles = {
        transform: `translate(${segment.startPoint.xIndex*cellSepartion}px, ${segment.startPoint.yIndex*cellSepartion}px) rotate(${rotation}deg)`
    }
    return (
        <div 
            className = {className}
            style = {styles}
        ></div>
    )
}
