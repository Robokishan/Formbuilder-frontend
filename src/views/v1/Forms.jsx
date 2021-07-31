/*eslint eqeqeq: "off"*/


import React, { useEffect } from "react";
// reactstrap components
import { Card, CardHeader, Container, Media, Row, Table } from "reactstrap";
// core components
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { deleteForm, getFormsList } from "../../actions/forms";
import { Button } from "reactstrap";
import Form from "./Form";

export default function Forms(props) {
  const forms = useSelector((store) => store.forms.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormsList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getTableBody = () => {
    let tablebody = null;
    if (forms.length > 0) {
      tablebody = forms.map((form, index) => {
        return (
          <>
            <tr>
              <td>
                <Media className="align-items-center">
                  <Media>
                    <Link
                      to={`/admin/forms/${form._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      {form.title}
                    </Link>
                  </Media>
                </Media>
              </td>
              <td>{form.description}</td>
              <td>
                <Button onClick={ e=> props.history.push(`${props.match.path}/${form._id}?type=2`)} color="success">Edit</Button>
                <Button onClick={ e=> dispatch(deleteForm(form._id)) } color="danger">Delete</Button>
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
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Forms</h3>
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
                  </tr>
                </thead>
                <tbody>{getTableBody()}</tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    );
  };

  return (
    <>
      <Switch>
        <Route path={props.match.path} exact render={form} />
        <Route
        exact
          path={`${props.match.path}/:assetId`}
          render={(props) => <Form formId={props.match.params.assetId}/>}
        />
      </Switch>
    </>
  );
}
