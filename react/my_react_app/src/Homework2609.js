import { useState } from "react";
import Q1_2609 from "./Q1_2609";
import Q2_2609 from "./Q2_2609";
import Q3_2609 from "./Q3_2609";

function Homework2609(){

    const [myRadio, setRadio] = useState("q1Show");

    const radio_change = (changeEvent) => {
        setRadio(changeEvent.target.value);
    }

    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"beige", padding:"1%"}}>
                <div className="row row_main">
                    <div className="col-3 text-center" style={{borderRight:"1px solid grey"}}>
                        <div id="mainLabelDiv">
                            <label>
                                <input type="radio" value="q1Show" name="radioOption" checked={myRadio === "q1Show"} onChange={radio_change}/>
                                Question 1
                            </label>
                            <label>
                                <input type="radio" value="q2Show" name="radioOption" checked={myRadio === "q2Show"} onChange={radio_change}/>
                                Question 2
                            </label>
                            <label>
                                <input type="radio" value="q3Show" name="radioOption" checked={myRadio === "q3Show"} onChange={radio_change}/>
                                Question 3
                            </label>
                        </div>
                    </div>
                    <div className="col-9">
                        {/* <Q1_2609/> */}
                        {/* <Q2_2609/> */}
                        {/* <Q3_2609/> */}
                        {
                            (myRadio == "q1Show") ? <Q1_2609/> : (myRadio == "q2Show") ? <Q2_2609/> : <Q3_2609/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homework2609;