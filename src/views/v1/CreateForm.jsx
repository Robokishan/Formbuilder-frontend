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
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Container, Media } from "reactstrap";
// core components
import { fetchAllAssets } from "../../utils/api/assets";
import Styles from "./Assets.module.scss";
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetList: [],
      enableNumber: 0,
      deviceList: [],
    };
  }

  handleEdit = (index) => {
    let assetList = this.state.assetList;
    assetList[index]["isediting"] =
      assetList[index]["isediting"] == true ? false : true;
    console.log(assetList[index]["isediting"]);
    this.setState({ assetList: assetList });
  };

  handleSave = (index) => {
    let assetList = this.state.assetList;
    assetList[index]["isediting"] =
      assetList[index]["isediting"] == true ? false : true;
    console.log(assetList[index]["isediting"]);
    this.setState({ assetList: assetList });
  };

  handleCancel = (index) => {
    let assetList = this.state.assetList;
    assetList[index]["asset_username"] = assetList[index]["oldValue"]
      ? assetList[index]["oldValue"]
      : assetList[index].asset_username;
    assetList[index]["isediting"] = false;
    console.log(assetList[index]["isediting"]);
    this.setState({ assetList: assetList });
  };

  async componentDidMount() {
    try {
      const assets = await fetchAllAssets();
      this.setState({
        assetList: assets?.data,
      });
    } catch (error) {
      this.setState({
        assetList: [],
      });
    }
  }

  render() {
    var tablebody = null;
    if (this.state.assetList.length > 0) {
      tablebody = this.state.assetList.map((asset, index) => {
        return (
          <>
            <tr>
              {!asset.isediting ? (
                <td className={`${Styles["leftFix"]}`}>
                  <button
                    className={Styles["no-decoration-button"]}
                    onClick={() => this.handleEdit(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                </td>
              ) : (
                <td className={`${Styles["leftFix"]}`}>
                  <button
                    onClick={() => this.handleSave(index)}
                    className={`${Styles["no-decoration-button"]} ${Styles["action-buttons-cross"]}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => this.handleCancel(index)}
                    className={`${Styles["no-decoration-button"]} ${Styles["action-buttons-correct"]}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                  </button>
                </td>
              )}
              <td className={`${Styles["leftFix"]}`} scope="row">
                <Media className="align-items-center">
                  <Media>
                    <CopyToClipboard key={asset.asset_id} text={asset.asset_id}>
                      <span key={asset.asset_id} className="mb-0 text-sm">
                        {asset.asset_name}
                      </span>
                    </CopyToClipboard>
                  </Media>
                </Media>
              </td>

              {asset.isediting ? (
                <td>
                  <input
                    className={`${Styles["input-asset-id"]}`}
                    name={asset.asset_id}
                    onChange={(event) => {
                      const name = event.target.name;
                      const value = event.target.value;
                      let assetList = this.state.assetList;
                      assetList[index].asset_username = value;
                      this.setState({ assetList: assetList });
                    }}
                    value={this.state.assetList[index].asset_username}
                  />
                </td>
              ) : (
                <td> {asset.asset_username}</td>
              )}
              <td>
                {/*<Link to={`/admin/owners/${asset.asset_id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>*/}
                {asset.asset_id}
                {/*</Link>*/}
              </td>
              <td>{asset.email}</td>
              <td>{asset.asset_type}</td>
              <td className="text-right">{asset.added_on}</td>
            </tr>
          </>
        );
      });
    } else {
      // tablebody =
    }

    return (
      <>
        <Container className="mt--7" fluid>
          <ReactFormBuilder />
        </Container>
      </>
    );
  }
}

export default CreateForm;
