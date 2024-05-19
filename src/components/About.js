import React, { useState } from "react";

export default function About(props) {
  // const [myStyle , setMyStyle] = useState({
  //     backgroundColor:"white",
  //     color: "black"
  // });
  // const [btnText , setBtnText] = useState("Enbale Dark Mode");

  // const handleStyle = (props)=>{
  //     if(myStyle.backgroundColor === "black"){
  //         setMyStyle({
  //             backgroundColor:"white",
  //             color:"black"
  //         })
  //         setBtnText("Enable Dark Mode")
  //     }

  //     else if(myStyle.backgroundColor === "white"){
  //         setMyStyle({
  //             backgroundColor:"black",
  //             color:"white"
  //         })
  //         setBtnText("Enable Light Mode");
  //     }
  // }
  document.body.style.backgroundColor = props.mode.textform.backgroundColor;
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode.contents.backgroundColor,
        padding: "20px",
        color: props.mode.contents.color,
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              class="accordion-body"
              style={{
                backgroundColor: props.mode.contents.backgroundColor,
                color: props.mode.contents.color,
              }}
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={handleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
