import React, { Component } from 'react';

class Products extends Component {


    render() {

        return (
            <>
                <div className="grid wide">
                    <h2 className="section--title">New Products</h2>

                    <div className="products">
                        {this.props.children}
                    </div>

                    <div className="products__button">
                        <a href="# " className="btn btn--lg btn--shadow btn--primary btn--zakaria">View All</a>
                    </div>
                </div>
            </>
        );
    }
}



export default Products;
