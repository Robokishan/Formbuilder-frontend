/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, NavLink as NavLinkRRD } from 'react-router-dom';
import {
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import storage from '../../utils/storage/storage';

interface State {
  collapseOpen: boolean;
}
interface Props {
  routes: any[];
  logo?: {
    imgSrc: string | undefined;
    imgAlt: string | undefined;
    innerLink: string;
    outterLink: string;
  };
}
class Sidebar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
    this.activeRoute.bind(this);
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return (this.props as any).location.pathname.indexOf(routeName) > -1
      ? 'active'
      : '';
  }

  logout() {
    storage.eraseAllvalues();
    (this.props as any).history.push('/auth/login');
  }

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState((state) => ({ collapseOpen: !state.collapseOpen }));
  };

  // closes the collapse
  closeCollapse = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.setState((state) => ({ collapseOpen: false }));
  };

  // creates the links that appear in the left menu / Sidebar
  createLinks = (routes) => routes.map((prop, key) => (
    <NavItem key={key}>
      <NavLink
        to={prop.layout + prop.path}
        tag={NavLinkRRD}
        onClick={this.closeCollapse}
        activeClassName="active"
      >
        <i className={prop.icon} />
        {prop.name}
      </NavLink>
    </NavItem>
  ));

  render() {
    const { routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo?.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo?.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: '_blank',
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {/* <img alt="..." src={profile_picture} /> */}
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.logout()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>{this.createLinks(routes)}</Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Sidebar;
