/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// reactstrap components
import { ReactFormBuilder, ReactFormGenerator } from 'react-form-builder2';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Button,
  InputGroup,
  Modal,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { UPDATE_NEW_FORM } from '../../constants/actions';
import { addNewForm } from '../../actions/forms';
import { RootState } from '../../store';

export default function CreateForm() {
  const [showModal, setshowModal] = useState(false);
  const newForm = useSelector((store: RootState) => store.forms.newForm);
  const dispatch = useDispatch();

  const onLoad = () => new Promise((resolve, _) => {
    resolve(newForm?.form ? newForm?.form : []);
  });
  const onChange = (data) => {
    dispatch({ type: UPDATE_NEW_FORM, key: 'form', payload: data });
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
        <Button
          color="success"
          onClick={(e) => {
            if ((newForm?.form as any).task_data?.length > 0) setshowModal(true);
            else toast.info('Please add some items in form');
          }}
        >
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
            Preview Form and save
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setshowModal(!showModal)}
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <div className="modal-body">
          <ReactFormGenerator hide_actions data={(newForm.form as any).task_data} />
          <hr className="my-3" />
          <Card className="bg-light shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Label>Name your Form</Label>
                    <InputGroup className="input-group-alternative">
                      <Input
                        name="title"
                        placeholder="Form Title"
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
                        placeholder="Form Description"
                        onChange={(e) => onFormDetailChange(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
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
            onClick={() => {
              dispatch(addNewForm(newForm));
              setshowModal(!showModal);
            }}
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
