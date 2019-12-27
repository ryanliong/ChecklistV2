import React from 'react'
import Item from './item'

class Allitems extends React.Component {

    render() {
        return (
            <div>
            {this.props.items.map((item, key) =>
                <Item item={item} key={item.id} handleDelete = {this.props.handleDelete} handleUpdate = {this.props.handleUpdate}/>
            )}
            </div> 
        )
    }

}


export default Allitems