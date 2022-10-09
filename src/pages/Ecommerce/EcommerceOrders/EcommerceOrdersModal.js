import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap"
import img7 from "../../../assets/images/companies/img-1.png";
import img4 from "../../../assets/images/companies/img-2.png";

const EcommerceOrdersModal = props => {
  const { isOpen, toggle } = props
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Report Details</ModalHeader>
        <ModalBody>
          <p className="mb-2">
            Report id: <span className="text-primary">#SK2540</span>
          </p>
          <p className="mb-4">
            Report Name: <span className="text-primary">King of Whales</span>
          </p>

          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Report</th>
                  <th scope="col">Report Name</th>
                  <th scope="col">Report Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <img src={img7} alt="" className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Report First 
                      </h5>
                      <p className="text-muted mb-0">$ 225 x 1</p>
                    </div>
                  </td>
                  <td>$ 255</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <img src={img4} alt="" className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Report 2 a
                      </h5>
                      <p className="text-muted mb-0">$ 145 x 1</p>
                    </div>
                  </td>
                  <td>$ 145</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h6 className="m-0 text-end">Sub Total:</h6>
                  </td>
                  <td>$ 400</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h6 className="m-0 text-end">Shipping:</h6>
                  </td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h6 className="m-0 text-end">Total:</h6>
                  </td>
                  <td>$ 400</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

EcommerceOrdersModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default EcommerceOrdersModal
