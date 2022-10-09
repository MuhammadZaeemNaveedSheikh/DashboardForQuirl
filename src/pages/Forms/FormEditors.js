import React from "react";

import {
  Form,
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Button
} from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FormXeditable from "./FormXeditable";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormUpload from "./FormUpload";
import UiVideo from "pages/Ui/UiVideo";
import MapsGoogle from "pages/Maps/MapsGoogle";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import FormElements from "./FormElements";
import FormAdvanced from "./FormAdvanced";
import Report from '../Report/Report';
const FormEditors = () => {

   //meta title
   document.title = "Form Editors"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Generate Report" />

          <Row>
            <Col>
              <Card>
                <CardBody >
                  <CardTitle className="h4">Report Styling</CardTitle>
                  {/* <Report /> */}
                  <p className="card-title-desc">
                  </p>

                  <Form method="post" >
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      
                    />
                  </Form>
                </CardBody>
                <Button color="primary">Add Block</Button>
            <FormUpload />  
            <Button color="primary">Generate Report</Button>
{/* 
            <FormXeditable />
            <FormElements />
            <FormAdvanced /> */}
            <UiVideo />

            <MapsGoogle />

              </Card>
              
            </Col>
          </Row>


          {/* <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">CK Editor</CardTitle>
                  <p className="card-title-desc">
                    Super simple wysiwyg editor on Bootstrap
                  </p>

                  <Form method="post">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormEditors;
