import React, { Component } from 'react'
import {Consumer} from "../context";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default class Details extends Component {
    render() {
        return (
            <Consumer>
                {(value)=>{
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>Rs </span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        about the product :
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                         cart
                                        disabled={inCart?true:false}
                                        onClick={()=> {
                                            value.addCart(id);
                                        }}
                                        >
                                            {inCart ? "inCart": "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}


const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
  color:${props => props.cart? "var(--mainYellow)": "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background:${props => props.cart? "var(--mainYellow)": "var(--lightBlue)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;