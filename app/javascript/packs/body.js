import React from 'react'
import Allitems from './allitems'
import NewFruit from './newitem'


class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {
            itemArr: [],
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleFormSubmit(title, description) {
        let body = JSON.stringify({item: {title: title, description: description}})

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
            }).then((results) => {
                return results.json();
            }).then((item)=>{
                this.addNewItem(item);
            })
    }

    addNewItem(item) {
        this.setState({
            items: this.state.itemArr.concat(item)
        })
    }
    
    handleDelete(id) {
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            }).then ((results) => {
                this.deleteItem(id);
            })
    }

    deleteItem(id) {
        let newItems = this.state.itemArr.filter((item) => item.id !== id);
        this.setState({
            itemArr: newItems
        })
    }

    componentDidMount() {
       
        fetch('http://localhost:3000/items')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({itemArr: data});
        })
    }

    

    render() {
        return (
            <div>
            <NewFruit handleFormSubmit = {this.handleFormSubmit} />
            <Allitems items ={this.state.itemArr} handleDelete = {this.handleDelete}/>
            </div> 
        )
    }

}


export default Body