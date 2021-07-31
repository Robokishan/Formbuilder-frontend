import React, { useState } from "react";
// reactstrap components
import { Container } from "reactstrap";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NEW_FORM } from "../../constants/actions";
import { addNewForm } from "../../actions/forms";
import {
  Button,
  InputGroup,
  Modal,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap";

export default function CreateForm() {
  const [showModal, setshowModal] = useState(false);
  const newForm = useSelector((store) => store.forms.newForm);
  const dispatch = useDispatch();

  const onLoad = () => {
    return new Promise(function (resolve, reject) {
      resolve(newForm?.form ? newForm?.form : []);
    });
  };
  const onChange = (data) => {
    dispatch({ type: UPDATE_NEW_FORM, key: "form", payload: data });
  };

  const onFormDetailChange = (event) => {
    dispatch({
      type: UPDATE_NEW_FORM,
      key: event.target.name,
      payload: event.target.value,
    });
  };

  return (
    <Container className="mt--7" fluid>
      <FormGroup>
        <Button color="success" onClick={(e) => setshowModal(true)}>
          Create Form
        </Button>
      </FormGroup>
      <ReactFormBuilder onLoad={onLoad} onPost={onChange} />

      <Modal
        className="modal-dialog-centered"
        isOpen={showModal}
        toggle={() => setshowModal(!showModal)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Form Title
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setshowModal(!showModal)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <ReactFormGenerator hide_actions data={newForm.form.task_data}/>
          <Row>
            <Col md="12">
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    name="title"
                    placeholder="Title"
                    onChange={(e) => onFormDetailChange(e)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    name="description"
                    placeholder="Description"
                    onChange={(e) => onFormDetailChange(e)}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => setshowModal(!showModal)}
          >
            Close
          </Button>
          <Button
            onClick={() => dispatch(addNewForm(newForm))}
            data-dismiss="modal"
            color="primary"
            type="button"
          >
            Save changes
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
