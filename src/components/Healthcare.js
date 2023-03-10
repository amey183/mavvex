import React, { useState, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/react";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrow from "./Arrow";
import Dots from "./Dots";
//import hc_symbol from "../images/hc_symbol.jpg"
import './Healthcare.css'

const Healthcare = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <>
      <div class="industry_intro">
        <div class="industry">
          <div>
            <p class="industries">Industries</p>
            <h3 class="heading-primary industry">
              <strong>Healthcare</strong>
            </h3>
            <p class="paragraph-4">
              AI has been widely used to diagnose diseases in clinical situations and assist medical professionals in 
              determining the best course of therapy. However, one of the most significant difficulties that healthcare 
              organisations face is data collection. For providing the best possible healthcare solutions to patients, 
              it is very important that medical data be easily shared across organisations.
            </p>  
          </div>
          
          <div id="w-node-_8c572a87-fa9d-b909-7650-222e4d93d1fb-47c1b84a" class="div-block-23">
            <img src="hc_symbol.jpg" loading="lazy" alt="" class="image-5"/>
          </div>
        </div>
      </div>


      {/* <div className="description">
        <div>
          <p className="industries">Industries</p>
          <h3 className="heading-primary industry">
            <strong>Healthcare</strong>
          </h3>
          <p className="paragraph-4">
            Welcome to our website! We provide AI services to build deep
            technology based products for the healthcare domain. Our team of
            experts is dedicated to developing cutting-edge AI solutions that
            help healthcare professionals improve patient outcomes and reduce
            costs.
            <br />
            <br />
            With our advanced AI algorithms and machine learning models, we can
            help you create intelligent healthcare applications that automate
            routine tasks, analyze complex medical data, and provide real-time
            insights for better decision-making.
          </p>
        </div>
      </div> */}

      <div class="industry_use_cases">
        <div class="industry_block">
          <p class="industries">Use Cases</p>
          <div class="industry_service_card">
            <div class="column-new">
              <div class="industry_card">
                <h3 class="heading-3-copy">Medical Imaging</h3>
                <p class="paragraph-new">
                  AI can improve the accuracy of medical imaging by identifying
                  anomalies that might be missed by human radiologists. This can
                  help detect diseases like cancer at an earlier stage, leading
                  to better treatment outcomes.
                </p>
              </div>
              <div class="industry_card">
                <h3 class="heading-3-copy">Clinical Decision Support</h3>
                <p class="paragraph-new">
                  AI can assist healthcare providers in making clinical
                  decisions by analyzing patient data and providing
                  recommendations based on evidence-based guidelines. This can
                  help reduce medical errors and improve patient outcomes.
                </p>
              </div>
              <div class="industry_card">
                <h3 class="heading-3-copy">Healthcare Chatbots</h3>
                <p class="paragraph-new">
                  AI-powered chatbots can assist patients with basic
                  health-related questions, provide information on symptoms, and
                  offer guidance on treatment options. This can help reduce the
                  burden on healthcare providers and improve access to care.
                </p>
              </div>
              <div class="industry_card">
                <h3 class="heading-3-copy">Predictive Analytics</h3>
                <p class="paragraph-new">
                  The healthcare industry can leverage predictive analytics to
                  anticipate and prevent adverse outcomes. By analyzing vast
                  amounts of patient data, AI models can identify patterns and
                  predict the likelihood of future health events, allowing
                  healthcare providers to intervene before a problem arises.
                  This can help reduce hospital readmissions, emergency room
                  visits, and the overall cost of care.
                </p>
              </div>
              <div class="industry_card">
                <h3 class="heading-3-copy">Drug Discovery</h3>
                <p class="paragraph-new">
                  AI can accelerate the drug discovery process by analyzing vast
                  amounts of data and identifying potential drug candidates.
                  This can help pharmaceutical companies bring new drugs to
                  market faster and more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div css={SliderCSS}>
        <SliderContent
          translate={translate}
          transition={transition}
          width={getWidth() * props.slides.length}
        >
          {props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))}
        </SliderContent>

        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />

        <Dots slides={props.slides} activeIndex={activeIndex} />
      </div> */}
    </>
  );
};

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

export default Healthcare;
