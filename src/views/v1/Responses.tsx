/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  Card, Row, CardHeader, Container, UncontrolledTooltip, Media, Table,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { deleteAnswer, getAnswersList } from '../../actions/formAnswers';
import Response from './Response';
import { FORMAT_DATE } from '../../constants/format';
import { RootState } from '../../store';

export default function Responses(props) {
  const answers = useSelector((store : RootState) => store.answers.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswersList());
  }, []);

  const getAnswersBody = () => {
    const totalHeader = 3;
    let tablebody = (
      <tr>
        <td colSpan={totalHeader} align="center">
          Nothing Found
        </td>
      </tr>
    );
    if (answers.length > 0) {
      tablebody = answers.map((answer, index) => (
        <>
          <tr>
            <td>
              <Media className="align-items-center">
                <Media>
                  <Link
                    id={`form-title-${index}`}
                    to={`/admin/responses/${answer._id}`}
                    style={{ color: 'inherit', textDecoration: 'underline' }}
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
                : 'Not available'}
            </td>
          </tr>
        </>
      ));
    }
    return tablebody;
  };

  const form = () => (
    <Row className="mt-5">
      <div className="col">
        <Card className="bg-default shadow">
          <CardHeader className="bg-transparent border-0">
            <h3 className="text-white mb-0">Responses</h3>
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

  return (
    <Container className="mt--7" fluid>
      {!props.match.params.responseId && form()}
      {props.match.params.responseId && (
        <Response responseId={props.match.params.responseId} />
      )}
    </Container>
  );
}
