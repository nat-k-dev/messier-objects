import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import Carousel from './Carousel';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Choco" title="shop" className="row" />
                        <div className="row">
                            <ProductConsumer>
                                { value=> {
                                    return value.products.map( item => {
                                        return <Product key={item.id} productObject={item} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                        <div className="py-5">
                            <Title name="About" title="producer" className="row" />
                            <Carousel />
                        </div>
                    </div>
                </div>
            </React.Fragment>
                //<Product />
        )
    }
}
