import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import Modal from "reactstrap/es/Modal";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
      contactModal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleMenu = name => {
    this.props.scrollTo(name);
  };

  render() {
    return (
      <div className="navigation-bar"  >
        <Navbar  color="dark" dark expand="md">
          <NavbarBrand onClick={() => this.handleMenu("/")} >
            <div className="avatar-container">
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

                  <button
                      className="navbar-toggler"
                      type="button"
                      onClick={this.toggle}
                  >
                    <span />
                    <span />
                  </button>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="menu-item"
                  onClick={() => this.handleMenu("projects")}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="menu-item"
                  href="#"
                  onClick={() => this.handleMenu("about")}
                >
                  About US
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => this.handleMenu("blog")}
                  className="menu-item"
                >
                  Blog
                </NavLink>
              </NavItem>
              {/*<NavItem>*/}
              {/*  <NavLink*/}
              {/*    className="menu-item"*/}
              {/*    href="#"*/}
              {/*    onClick={this.toggleModal}*/}
              {/*  >*/}
              {/*    contact*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
              {/*<NavItem>*/}
              {/*  <NavLink*/}
              {/*    className="menu-item rounded-link"*/}
              {/*    // href="{"*/}
              {/*        onClick={this.toggleModal}*/}
              {/*    id="nav-lastchild"*/}
              {/*  >*/}
              {/*    Contact*/}
              {/*  </NavLink>*/}
              {/*</NavItem>*/}
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="w-100">
          {/*<Contact/>*/}
        </Modal>
      </div>
    );
  }
}
