import PropTypes from 'prop-types'
import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import LightData from "./LightData"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const LoadingContainer = () => <div>Loading...</div>

const MapsGoogle = props => {

  //meta title
  document.title = "Google Maps ";

  const selectedPlace = {}

  function onMarkerClick() {
    alert("You clicked in this marker")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle>Markers</CardTitle>
                  <CardSubtitle className="mb-3">
                    Example of google maps.
                  </CardSubtitle>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      style={{ width: "100%", height: "100%" }}
                      zoom={14}
                    >
                      <Marker
                        title={"The marker`s title will appear as a tooltip."}
                        name={"SOMA"}
                        position={{ lat: 37.778519, lng: -122.40564 }}
                      />
                      <Marker name={"Dolores park"} />
                      <InfoWindow>
                        <div>
                          <h1>{selectedPlace.name}</h1>
                        </div>
                      </InfoWindow>
                    </Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

        
          </Row>

        </div>
      </div>
    </React.Fragment>
  )
}

MapsGoogle.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(MapsGoogle)
)
