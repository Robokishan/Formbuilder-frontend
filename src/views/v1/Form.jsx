import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getForm, updateForm } from "../../actions/forms";
import { useDispatch, useSelector } from "react-redux";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import { Container, Card, CardBody, FormGroup, Button } from "reactstrap";
import { UPDATE_EXSITING_FORM } from "../../constants/actions";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Form(props) {
  const form = useSelector((state) => state.forms.form);
  const isFetching = useSelector((state) => state.forms.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm(props.formId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onChange = (data) => {
    dispatch({ type: UPDATE_EXSITING_FORM, key: "form", payload: data });
  };

  const onFormSubmit = (data) => {
    console.log("form data", JSON.stringify(data));
  }

  let query = useQuery();

  const defaultForm = () => {
    return <ReactFormGenerator onSubmit={ (e) => onFormSubmit(e)} data={form.form.task_data} />;
  };

  const Form = (type) => {
    switch (type) {
      case "1":
        return defaultForm();
      case "2":
        return (
          <>
            <FormGroup>
              <Button
                color="success"
                onClick={(e) =>
                  dispatch(updateForm({ formId: props.formId, form: form }))
                }
              >
                Update Form
              </Button>
            </FormGroup>
            <ReactFormBuilder onPost={onChange} data={form.form.task_data} />;
          </>
        );
      default:
        return defaultForm();
    }
  };
  return (
    <Container className="mt--7" fluid>
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          {!isFetching && form?.form?.task_data?.length > 0 ? (
            Form(query.get("type"))
          ) : (
            <h1>Loading</h1>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}
