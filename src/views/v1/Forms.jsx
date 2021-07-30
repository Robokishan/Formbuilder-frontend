/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Card, CardHeader, Container, Media, Row, Table } from "reactstrap";
// core components
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFormsList } from "../../actions/forms";
import { Button } from "reactstrap";

export default function Forms(props) {
  const forms = useSelector((store) => store.forms.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormsList());
  }, []);

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
                      to={`/admin/owners/${form._id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }} >
                      {form.title}
                    </Link>
                  </Media>
                </Media>
              </td>
              <td>{form.description}</td>
              <td>
                <Button color='success' >Edit</Button>
                <Button color='danger' >Delete</Button>
              </td>
            </tr>
          </>
        );
      });
    }
    return tablebody;
  };

  return (
    <>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Card tables</h3>
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
    </>
  );
}
