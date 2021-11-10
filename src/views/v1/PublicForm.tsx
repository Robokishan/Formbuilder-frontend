/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { ReactFormGenerator } from 'react-form-builder2';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Card, CardBody } from 'reactstrap';
import { addResponse, getPublicForm } from '../../actions/forms';
import { RootState } from '../../store';

export default function PublicForm(props) {
  const [formId, setformId] = useState(props.match.params.formId);
  const form = useSelector((state : RootState) => state.forms.form);
  const isFetching = useSelector((state: RootState) => state.forms.isFetching);
  const dispatch = useDispatch();

  const onFormSubmit = (formData) => {
    dispatch(addResponse({ formId, formData }));
  };

  useEffect(() => {
    dispatch(getPublicForm(formId));
  }, []);

  const defaultForm = () => {
    const formQuestions = form?.form?.task_data?.length > 0 ? form?.form?.task_data : [];
    if (formQuestions.length > 0) {
      return (
        <ReactFormGenerator
          onSubmit={(e) => onFormSubmit(e)}
          data={formQuestions}
        />
      );
    }
    return <h1> No Form Questions Found </h1>;
  };

  return (
    <Container className="mt--7" fluid>
      <Card className="bg-secondary shadow border-0">
        <div className=" mt-6 text-center text-muted mb-4">
          <big>{form.title}</big>
        </div>
        <CardBody className="px-lg-5 py-lg-5">
          {!isFetching && defaultForm()}
        </CardBody>
      </Card>
    </Container>
  );
}
