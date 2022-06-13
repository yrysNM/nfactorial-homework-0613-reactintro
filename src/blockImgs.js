import BlockImgsLists from "./blockImgsLists";
import "./css/blockImgs.css";

const BlockImgs = ({data}) => {
    const elements = data.map(item => {
        // const {title, imgSrc} = item; 

        return(
            <BlockImgsLists {...item} />

        );
    });

    return(
        <div className="blockImg">
            {elements}
        </div>
    )
}

export default BlockImgs;