import React, { Component } from 'react';
class ProdList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <p><b>Showing Product details</b></p>
                {this.props.items.map((obj, index) => {
                    return (
                       <div>
                            <p>
                              
                            Product={obj.name}<br />
                            Price={obj.price}<br />
                            Description={obj.description}<br />
                            </p>
                           </div>
                           
                            // {/* <button onClick={() => { this.props.deleteProd(index) }}>Delete</button> */}
                       
                    )
                })}
            
            </div>
           
        )
    }
}

export default ProdList;