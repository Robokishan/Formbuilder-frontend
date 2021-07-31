import React, { useEffect, useState } from "react";
import { getPublicForm } from "../../actions/forms";
import { ReactFormGenerator } from "react-form-builder2";
import { addResponse } from "../../actions/forms";
import { useDispatch, useSelector } from "react-redux";
import { Container, CardTitle, Card, CardBody } from "reactstrap";

export default function PublicForm(props) {
  const [formId, setformId] = useState(props.match.params.formId);
  const form = useSelector((state) => state.forms.form);
  const isFetching = useSelector((state) => state.forms.isFetching);
  const dispatch = useDispatch();

  const onFormSubmit = (formData) => {
    console.log("form data", JSON.stringify(formData));
    dispatch(addResponse({ formId, formData }));
  };

  useEffect(() => {
    dispatch(getPublicForm(formId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const defaultForm = () => {
    let formQuestions =
      form?.form?.task_data?.length > 0 ? form?.form?.task_data : [];
    if (formQuestions.length > 0) {
      return (
        <ReactFormGenerator
          onSubmit={(e) => onFormSubmit(e)}
          data={formQuestions}
        />
      );
    } else {
      return <h1> No Form Questions Found </h1>;
    }
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
