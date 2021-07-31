import React, { useEffect } from "react";
import { Card, CardHeader, Container, Media, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAnswer,
  getAnswersList,
} from "../../actions/formAnswers";
import { Button } from "reactstrap";
import Response from "./Response";

export default function Responses(props) {
  const answers = useSelector((store) => store.answers.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswersList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getAnswersBody = () => {
    let tablebody = null;
    if (answers.length > 0) {
      tablebody = answers.map((answer, index) => {
        return (
          <>
            <tr>
              <td>
                <Media className="align-items-center">
                  <Media>
                    <Link
                      to={`/admin/responses/${answer._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      {answer.title}
                    </Link>
                  </Media>
                </Media>
              </td>
              <td>{`/admin/responses/${answer._id}`}</td>
              <td>{answer.description}</td>
              <td>
                <Button
                  onClick={(e) => dispatch(deleteAnswer(answer._id))}
                  color="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </>
        );
      });
    }
    return tablebody;
  };

  const form = () => {
    return (
      <Card className="bg-default shadow">
        <CardHeader className="bg-transparent border-0">
          <h3 className="text-white mb-0">Forms</h3>
        </CardHeader>
        <Table className="align-items-center table-dark table-flush" responsive>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{getAnswersBody()}</tbody>
        </Table>
      </Card>
    );
  };

  return (
    <Container className="mt--7" fluid>
      {!props.match.params.responseId && form()}
      {props.match.params.responseId && <Response responseId={props.match.params.responseId} />}
    </Container>
  );
}
