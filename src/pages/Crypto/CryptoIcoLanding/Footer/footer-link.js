import React from "react"
import { Row, Col } from "reactstrap"

//Import Images
import logolight from "../../../../assets/images/logo-light.png"

const FooterLink = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg="6">
          {/* <div className="mb-4">
            <img src={logolight} alt="" height="20" />
          </div> */}

          <p className="mb-2">
            {new Date().getFullYear()} © Z1TECHS. Design & Develop by Z1TECHS
          </p>
          <p>
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FooterLink
