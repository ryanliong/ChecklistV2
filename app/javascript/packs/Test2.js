import React from 'react'
import Item from './item'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemArr: [
                {id: 1, title: "apple", description: "Red"},
                {id: 2, title: "Pear", description: "Green"},
                {id: 3, title: "Banana", description: "Yellow"},
                ]
        }
    }
    render() {
        return (
            <h3>
            {this.state.itemArr.map((item, key) =>
                <Item item={item} key={item.id} />
            )}
            </h3> 
        )
    }

}


export default App