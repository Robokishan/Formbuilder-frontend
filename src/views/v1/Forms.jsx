/*eslint eqeqeq: "off"*/


import React, { useEffect, useState } from "react";
// reactstrap components
import { Card, CardHeader,Modal, Container, Media, Row, Table, UncontrolledTooltip } from "reactstrap";
// core components
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { deleteForm, getFormsList } from "../../actions/forms";
import { Button } from "reactstrap";
import Form from "./Form";

export default function Forms(props) {
  const [linkModal, setlinkModal] = useState(false)
  const [publicLink, setpublicLink] = useState("")
  const [copiedText, setcopiedText] = useState("")
  const forms = useSelector((store) => store.forms.forms);
  const dispatch = useDispatch();

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
                <Button onClick={ e=> {
                  setlinkModal(!linkModal)
                  setpublicLink(`${window.location.origin}/admin/public/form/${form._id}`)
                } } color="info">Get Link</Button>
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
          <Modal
          className="modal-dialog-centered"
          isOpen={linkModal}
          toggle={() => setlinkModal(!linkModal)}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Public Link
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setlinkModal(!linkModal)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            {console.log(publicLink)}
            <CopyToClipboard
            text={publicLink}
            onCopy={() =>  setcopiedText(publicLink) }
          >
            <Button
              className="btn-icon-clipboard"
              id="tooltip982655500"
              type="button"
            >
              <div>
                <i className="ni ni-active-40" />
                <span>{publicLink}</span>
              </div>
            </Button>
          </CopyToClipboard>
          <UncontrolledTooltip
            delay={0}
            trigger="hover focus"
            target="tooltip982655500"
          >
            {copiedText === publicLink
              ? "Copied"
              : "Copy To Clipboard"}
          </UncontrolledTooltip>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => setlinkModal(!linkModal)}
            >
              Close
            </Button>
          </div>
        </Modal>
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
