
import {Component} from "react";
class Product extends  Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.addProd}>
                    <label for='name'>Product Name</label>
                    <input type='text' name='name' /><br />
                    <label for='price'> Product Price</label>
                    <input type='number' name='price' /><br />
                    <label for='description'>Description</label><br/>
                    <textarea name='description' rows='10' columns='10' /><br /><br/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Product;