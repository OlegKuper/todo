import React from 'react'
import './add-items.scss'

export default class AddItems  extends  React.Component{
    state = {
        label: ''
    }


    onLabelChange = (e) => {
       this.setState({
           label: e.target.value
       })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addListItem(this.state.label)
        this.setState({
            label: ''
        })

    }


    render() {
        return (
            <form className='item-add-form'
                    onSubmit={this.onSubmit}>
                <input type="text"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       className="form-control search-input"
                       placeholder="Add Todo" />
                <button
                    type="submit"
                    className="btn btn-info">Add Item</button>
            </form>
        )
    }


}