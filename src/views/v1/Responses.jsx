import React, { useEffect } from "react";
import { Card, Row, CardHeader, Container, UncontrolledTooltip, Media, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer, getAnswersList } from "../../actions/formAnswers";
import { Button } from "reactstrap";
import Response from "./Response";
import moment from "moment";
import { FORMAT_DATE } from "../../constants/format";

export default function Responses(props) {
  const answers = useSelector((store) => store.answers.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswersList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getAnswersBody = () => {
    let totalHeader = 3;
    let tablebody = (
      <tr>
        <td colSpan={totalHeader} align="center">
          Nothing Found
        </td>
      </tr>
    );
    if (answers.length > 0) {
      tablebody = answers.map((answer, index) => {
        return (
          <>
            <tr>
              <td>
                <Media className="align-items-center">
                  <Media>
                    <Link
                    id={`form-title-${index}`}
                      to={`/admin/responses/${answer._id}`}
                      style={{ color: "inherit", textDecoration: "underline"}}
                    >
                      {answer.title}
                    </Link>
                  </Media>
                </Media>
              </td>
              <UncontrolledTooltip
                placement="auto"
                target={`form-title-${index}`}
              >
                Click
              </UncontrolledTooltip>
              <td>{answer.description}</td>
              <td>
                <Button
                  onClick={(e) => dispatch(deleteAnswer(answer._id))}
                  color="danger"
                >
                  Delete
                </Button>
              </td>
              <td>
                {answer.updated_at
                  ? moment(answer.updated_at).format(FORMAT_DATE)
                  : "Not available"}
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
      <Row className="mt-5">
        <div className="col">
          <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
              <h3 className="text-white mb-0">Forms</h3>
              <h6 className="text-white mb-0">Click on title name for details</h6>
            </CardHeader>
            <Table
              className="align-items-center table-dark table-flush"
              responsive
            >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                  <th scope="col">Modified</th>
                </tr>
              </thead>
              <tbody>{getAnswersBody()}</tbody>
            </Table>
          </Card>
        </div>
      </Row>
    );
  };

  return (
    <Container className="mt--7" fluid>
      {!props.match.params.responseId && form()}
      {props.match.params.responseId && (
        <Response responseId={props.match.params.responseId} />
      )}
    </Container>
  );
}
