import React from 'react'
import { NavLink, Link, Route } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <>
      <div className="footer-2">
        <div className="div-block-11">
          <div className="container-flex">

            <div className="footer-column-2">
              <a href="/" aria-current="page" className="logo-link w-inline-block w--current">
                <div className="text-block">
                  <span className="text-span-6">better</span>data
                </div>
              </a>
              <div className="footer-title-side">PIXEL at One North<br />
                (10 Central Exchange Green, Singapore 138649)
              </div>
              <div className="footer-title-side">
                contact@betterdata.ai
              </div>
              <div className="footer-title-side-2">
                Follow us and keep updated!
              </div>
              <div className="social-link-wrap">
                <a href="https://www.linkedin.com/company/betterdataai/" className="social-link w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/612f12c0859b972dc8f6d980_linkedin_logo_grey.svg" alt="" />
                </a>
                <a href="https://www.youtube.com/watch?v=Vsm0Q9YjsvA&amp;t=1s" className="social-link w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/612f131877c6dc20d387ddbd_youtube.svg" alt="" />
                </a>
                <a href="https://twitter.com/betterdataai" className="social-link w-inline-block">
                  <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/613ee830cd671532bba4ab78_twitter_logo_grey.svg" alt="" />
                </a>
              </div>
            </div>

            <div id="w-node-ba4fc6a5-e5e7-4972-849e-6686f506dfb4-f506dfa5" className="footer-column-2">
              <div className="footer-title-2">
                Research
              </div>
              <a href="/product/how-it-works" className="footer-link-2">
                Research Team
              </a>
              <a href="/product/how-it-works" className="footer-link-2">
                Publications
              </a>
            </div>

            <div className="footer-column-2">
              <div className="footer-title-2">
                Company
              </div>
              <a href="/company/contact-us" className="footer-link-2">
                About
              </a>
              <a href="/company/contact-us" className="footer-link-2">
                Contact us
              </a>
              <a href="https://betterdataai.notion.site/Careers-at-betterdata-f2215c87cd174e19a1216be49193fd6d" className="footer-link-2">
                Careers
              </a>
              <a href="https://medium.com/@betterdata" className="footer-link-2">
                Blog
              </a>
            </div>

            <div className="footer-column-2">
              <div className="footer-title-2">
                Use Cases
              </div>
              <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
                Product Development
              </a>
              <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
                Data Privacy
              </a>
              <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
                Language Transcription and Translation Services
              </a>
            </div>

            <div className="footer-column-2">
              <div className="footer-title-2">
                Industries
              </div>
              <a href="/industries/financial-services" className="footer-link-2">
                Healthcare
              </a>
              <a href="/industries/telcoms" className="footer-link-2">
                Agriculture
              </a>
              <a href="/industries/healthcare" className="footer-link-2">
                Retail
              </a>
              <a href="/industries/retail" className="footer-link-2">
                Conversational AI
              </a>
              <a href="/industries/retail" className="footer-link-2">
                Privacy
              </a>
            </div>

          </div>

          <div className="legal-wrap">
            <div className="legal-text">
            © Copyright 2023 BetterData Pte Ltd - All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

{/* <div className="footer-2">
  <div className="div-block-11">
    <div className="container-flex">

      <div className="footer-column-2">
        <a href="/" aria-current="page" className="logo-link w-inline-block w--current">
          <div className="text-block">
            <span className="text-span-6">better</span>data
          </div>
        </a>
        <div className="footer-title-side">PIXEL at One North<br/>
          (10 Central Exchange Green, Singapore 138649)
        </div>
        <div className="footer-title-side">
          contact@betterdata.ai
        </div>
        <div className="footer-title-side-2">
          Follow us and keep updated!
        </div>
        <div className="social-link-wrap">
          <a href="https://www.linkedin.com/company/betterdataai/" target="_blank" className="social-link w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/612f12c0859b972dc8f6d980_linkedin_logo_grey.svg" alt=""/>
          </a>
          <a href="https://www.youtube.com/watch?v=Vsm0Q9YjsvA&amp;t=1s" target="_blank" className="social-link w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/612f131877c6dc20d387ddbd_youtube.svg" alt=""/>
          </a>
          <a href="https://twitter.com/betterdataai" target="_blank" className="social-link w-inline-block">
            <img src="https://uploads-ssl.webflow.com/60dada67db0b973ec338d392/613ee830cd671532bba4ab78_twitter_logo_grey.svg" alt=""/>
          </a>
        </div>
      </div>

      <div id="w-node-ba4fc6a5-e5e7-4972-849e-6686f506dfb4-f506dfa5" className="footer-column-2">
        <div className="footer-title-2">
          Product
        </div>
        <a href="/product/how-it-works" className="footer-link-2">
          Why synthetic data?
        </a>
        <a href="/product/how-it-works" className="footer-link-2">
          How it works
        </a>
        <a href="https://www.betterdata.ai/product/how-it-works#faq" className="footer-link-2">
          FAQ
        </a>
      </div>
      
      <div className="footer-column-2">
        <div className="footer-title-2">
          Company
        </div>
        <a href="/company/contact-us" className="footer-link-2">
          About
        </a>
        <a href="/company/contact-us" className="footer-link-2">
          Contact us
        </a>
        <a href="https://betterdataai.notion.site/Careers-at-betterdata-f2215c87cd174e19a1216be49193fd6d" target="_blank" className="footer-link-2">
          Careers
        </a>
        <a href="https://medium.com/@betterdata" target="_blank" className="footer-link-2">
          Blog
        </a>
        <a href="#" className="footer-link-2">
          Privacy Policy
        </a>
      </div>
      
      <div className="footer-column-2">
        <div className="footer-title-2">
          Use Cases
        </div>
        <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Product development &amp; testing
        </a>
        <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Data collaborations
        </a>
        <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Data privacy verification
        </a>
        <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Data retention
        </a><a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Data monetisation
        </a>
        <a href="https://www.betterdata.ai/#use_cases" className="footer-link-2">
          Bias &amp; imbalance mitigation
        </a>
      </div>
      
      <div className="footer-column-2">
        <div className="footer-title-2">
          Industries
        </div>
        <a href="/industries/financial-services" className="footer-link-2">
          Financial Services
        </a>
        <a href="/industries/telcoms" className="footer-link-2">
          Telecommunications
        </a>
        <a href="/industries/healthcare" className="footer-link-2">
          Healthcare
        </a>
        <a href="/industries/retail" className="footer-link-2">
          Retail
        </a>
      </div>

    </div>
    
    <div className="legal-wrap"><div className="legal-text">
      © Copyright 2023 BetterData Pte Ltd - All Rights Reserved
    </div>
  </div>
</div>
</div> */}