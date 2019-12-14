import React from 'react'



class Item extends React.Component {
    render() {
        return (
            <div className ="item">
                <p> {this.props.item.title}</p>
                <p> {this.props.item.description}</p>
                {/* {this.props.item.map((value, index) => {
                    return <li key ={index}>{value}</li>
                })} */}
            </div>
        );
    }
}




export default Item;