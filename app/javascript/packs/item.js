import React from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable:false
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {

        if(this.state.editable) {
            let title = this.title.value
            let description = this.description.value
            let id = this.props.item.id
            let item = {id: id, title: title, description: description}
            this.props.handleUpdate(item)
        }
        
        this.setState({
            editable: !this.state.editable
        })
    }

    render() {
        let title = this.state.editable
            ? <input type='text' ref={input => this.title = input} defaultValue={this.props.item.title}/>
            : <p> {this.props.item.title} </p>

        let description = this.state.editable
            ? <input type='text' ref={input => this.description = input} defaultValue={this.props.item.description} />
            : <p> {this.props.item.description}</p>

        return (
            <div className ="item">
                {title}
                {description}
                <button onClick={() => this.handleEdit()}> {this.state.editable? 'Submit' : 'Edit'} </button>
                <button onClick={() => this.props.handleDelete(this.props.item.id)}> X </button>
               
            </div>
        );
    }
}




export default Item;