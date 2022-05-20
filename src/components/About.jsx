import React from 'react'

function About(props) {
    // const [ myStyle,setmyStyle]=React.useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    let myStyle = {
        color: props.mode==='dark'?"white":"black",
        backgroundColor: props.mode==="dark"?"#212529":"white"
    }

  return (
    <div className="container my-2" >
        <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analize your text</strong>
                
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quam veniam rem, quo praesentium id, autem suscipit harum saepe, rerum ea? Dolores reiciendis rerum sapiente!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus omnis tenetur libero adipisci vero ut, deserunt alias deleniti qui!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Bowser Friendly</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae similique velit et amet! Ducimus minima odit assumenda. Deserunt autem repellat laboriosam. Nemo soluta aspernatur amet officia doloremque exercitationem inventore, iste veniam blanditiis incidunt id aliquam.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
