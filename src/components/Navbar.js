import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
function Navbar ({signIn, signOut, uid}) {
    return (
      <NavB className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
        <Link to="/">
          <img src={logo} alt="e-store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="navbar-brand">
            <Link to="/" className="nav-link">
              V-Shop
            </Link>
          </li>
        </ul>
        <div>
    <form className="form-inline justify-content-center" >
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerExternalContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <ButtonContainer onClick={()=> {
          window.location = "/cart";
        }}>
              
              <span className="mr-2">
                <i className="fas fa-cart-plus" /> Cart
              </span>
            </ButtonContainer>
          {uid ? ( <ButtonContainer onClick={() => {
                signOut();
            }}>
              
              <span className="mr-2">
                <i className="fas fa-user" /> Log Out
              </span>
            </ButtonContainer>
          ) : (
            <ButtonContainer onClick={() => {
              signIn();
          }}>
              <span className="mr-2">
                <i className="fas fa-user" /> Log In
              </span>
            </ButtonContainer>
          )}
        </ul>
        </div>
      </NavB>
    );
  }


const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

const NavB = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;