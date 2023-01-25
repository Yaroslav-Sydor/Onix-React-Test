import '../../../styles/main/source/source.css'
import SourceCard from "./sourceCard";
function Source() {
    return (
        <div className="source__container">
            <div className={"source__title__container"}>
                <div className={"source__title"}>Home and<br/>outdoor</div>
                <button className={"source__button"}>Source now</button>

            </div>
            <div className={"source__grid__container"}>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>
                <SourceCard/>


            </div>


        </div>
    );
}

export default Source;
