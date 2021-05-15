import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data";

const Context = React.createContext();

export default class Provider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        user: null
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];

        })
        this.setState(()=> {
            return {products: tempProducts};
        })
    }

getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
}

    handle = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product};
        });
    };
    addCart = id =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() =>{
            return {products: tempProducts,cart:[...this.state.cart,product]};
        });
    };
    render() {
        return (
            <Context.Provider value={{
                    ...this.state,
                    handle: this.handle,
                    addCart: this.addCart
            }
            }>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;

export { Provider, Consumer};