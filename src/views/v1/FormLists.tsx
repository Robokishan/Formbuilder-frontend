/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import React, { useState } from 'react';
// core components
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
// reactstrap components
import {
  Button, Card,
  CardHeader, Container,
  Media, Modal, Row,
  Table, UncontrolledTooltip,
} from 'reactstrap';
import { FORMAT_DATE } from '../../constants/format';
import { useFormListQuery } from '../../generated/graphql';
import { RootState } from '../../store';
import Form from './Form';

const tHead = ['Title', 'Description', 'Action', 'Modified', 'Responses'];

export default function FormLists(props) {
  const [linkModal, setlinkModal] = useState(false);
  const [publicLink, setpublicLink] = useState('');
  const [copiedText, setcopiedText] = useState('');
  const formList = useSelector((store: RootState) => store.forms.forms);
  // const dispatch = useDispatch();
  const [{ data, fetching, error }] = useFormListQuery();

  const getTableBody = () => {
    let tablebody: JSX.Element | JSX.Element[];

    tablebody = (
      <tr>
        <td colSpan={tHead.length} align="center">
          Nothing Found
        </td>
      </tr>
    );
    if (data !== undefined && data?.forms.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tablebody = data?.forms.map((form:any, index) => (
        <>
          <tr>
            <td>
              <Media className="align-items-center">
                <Media>
                  <Link
                    id={`form-title-${index}`}
                    to={`/admin/forms/${form.id}`}
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    {form.title}
                  </Link>
                </Media>
              </Media>
            </td>
            <td>{form.description}</td>
            <UncontrolledTooltip
              placement="auto"
              target={`form-title-${index}`}
            >
              Click
            </UncontrolledTooltip>
            <td>
              <Button
                onClick={(e) => props.history.push(`${props.match.path}/${form.id}?type=2`)}
                color="success"
              >
                Edit
              </Button>
              <Button
                // onClick={(e) => dispatch(deleteForm(form.id))}
                color="danger"
              >
                Delete
              </Button>
              <Button
                onClick={(e) => {
                  setlinkModal(!linkModal);
                  setpublicLink(
                    `${window.location.origin}/public/form/${form.id}`,
                  );
                }}
                color="info"
              >
                Get Link
              </Button>
            </td>
            <td>
              {form.updated_at
                ? moment(form.updated_at).format(FORMAT_DATE)
                : 'Not available'}
            </td>
            <td>
              {form.responsecount ? form.responsecount : 'Not available'}
            </td>
          </tr>
        </>
      ));
    }
    return tablebody;
  };

  const form = () => (
    <Container className="mt--7" fluid>
      <Row className="mt-5">
        <div className="col">
          <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
              <h3 className="text-white mb-0">Forms</h3>
              <h6 className="text-white mb-0">Click on title name for preview</h6>
            </CardHeader>
            <Table
              className="align-items-center table-dark table-flush"
              responsive
            >
              <thead className="thead-dark">
                <tr>
                  {tHead.map((head) => <th scope="col">{head}</th>)}
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
              <span aria-hidden>×</span>
            </button>
          </div>
          <div className="modal-body">
            <CopyToClipboard
              text={publicLink}
              onCopy={() => setcopiedText(publicLink)}
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
              {copiedText === publicLink ? 'Copied' : 'Copy To Clipboard'}
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

  return (
    <>
      <Switch>
        <Route path={props.match.path} exact render={form} />
        <Route
          exact
          path={`${props.match.path}/:assetId`}
          render={(_props) => <Form formId={_props.match.params.assetId} />}
        />
      </Switch>
    </>
  );
}
