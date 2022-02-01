import { Component } from "react";
import { Routes, Route, Link, Router } from 'react-router-dom';
import ProdList from "./ProdList";
import Product from  "./Product";
class Main extends Component {
    constructor() {
        super()
        this.state = {
            products: [
                {
                    name: 'Tshirt',
                    price: 98,
                    description: 'Cotton Light Weight Shirts'
                }
            ]
        }
    }

    addProd = (event) => {
        event.preventDefault()
        let formObj = event.target
        let prodName = formObj.name.value;
        let prodPrice = parseInt(formObj.price.value)
        let prodDescription = formObj.description.value;

        const newObj = { name: prodName, price: prodPrice, description: prodDescription }

        this.setState(
            {
                products: [...this.state.products, newObj]
            }
        )
    }
    render() {
        return (
            <div className="main">
                <h1>PRODUCTS</h1>
                <div >
                <nav>
                    <Link to="/create" >Show Create Product</Link> 
                     < br/>
                    <Link to='/list'>Show Products List</Link>
                </nav>
                <br/>
                <br/>
                </div>
                <Routes>
                    <Route path="create" element={<Product addProd={this.addProd} />} />
                    <Route path="list" element={<ProdList items={this.state.products} />} />
                </Routes>
                {/* <Star/> */}
            </div>
        )
    }
}
export default Main;