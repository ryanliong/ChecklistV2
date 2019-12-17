import React from 'react'




class Item extends React.Component {
    render() {
        return (
            <div className ="item">
                <p> {this.props.item.title}</p>
                <p> {this.props.item.description}</p>
                <button onClick={() => this.props.handleDelete(this.props.item.id)}> X </button>
               
            </div>
        );
    }
}




export default Item;