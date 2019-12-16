import React from 'react'
import Item from './item'

class Allitems  extends React.Component {
    constructor() {
        super();
        this.state = {
            itemArr: [],
        }
    }

    
    componentDidMount () {
       
        fetch('http://localhost:3000/items')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({itemArr: data});
        })

        // console.log("res", results);
        
        console.log("Itemarr", this.state.itemArr);
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


export default Allitems