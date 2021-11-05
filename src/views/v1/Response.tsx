import React, { useEffect } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../../actions/formAnswers";
import { Card, CardBody } from "reactstrap";
import { RootState } from "../../store";

export default function Response(props) {
  const isFetching = useSelector(
    (state: RootState) => state.answers.isFetching
  );
  const answer = useSelector((state: RootState) => state.answers.answer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswer(props.responseId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card className="bg-secondary shadow border-0">
      <CardBody className="px-lg-5 py-lg-5">
        <div className="text-center text-muted mb-4">
          <small>Title : {answer?.title}</small>
        </div>
        {!isFetching ? (
          answer?.form?.task_data.length > 0 ? (
            <ReactFormGenerator
              hide_actions
              read_only
              answer_data={answer.answers}
              data={answer.form.task_data}
            />
          ) : null
        ) : null}
      </CardBody>
    </Card>
  );
}
