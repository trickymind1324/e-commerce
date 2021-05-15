import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {Consumer} from "../context";

export default class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Welcome to " title="V-Shop"/>
                        <div className="row">
                            <Consumer>
                                {value => {
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product}/>;
                                    })
                                }}
                            </Consumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                //<Product></Product>
        )
    }
}
