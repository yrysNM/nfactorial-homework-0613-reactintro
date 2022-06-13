import "./css/blockImgsLists.css";

const BlockImgsLists = ({title, imgSrc}) => {
    return(
        <div className="blockImgsList">
            <div className="blockImg__title">
                {title}
            </div>

            <img src={imgSrc} alt="img" />
        </div>
    );
}

export default BlockImgsLists;