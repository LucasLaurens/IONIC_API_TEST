import React, { Component } from 'react';
import { connect } from 'react-redux'
import { create_item, edit_item } from '../store/actions/actions'

class Form extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: (undefined !== this.props.id) ? parseInt(this.props.id) : this.props.items.length + 1,
			name: (undefined !== this.props.id) ? this.props.items[this.props.id - 1].name : ""
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		this.setState({
            [e.target.id]: e.target.value
        })
	}

	pushItem = (e) => {
		e.preventDefault()
		this.props.CreateItem(this.state)
		this.setState({
			name: ""
		})
	}

	editItem = (e) => {
		e.preventDefault()
		this.props.EditItem(this.state)
		console.log(this.props.items)
	}

	render() {
		const { name } = this.state
		console.log(this.props.id)
		return (
			<div>
				{
					(undefined !== this.props.id) ?
						<form action="post">
							<div>
								<label htmlFor="name">name</label><br />
								<input type="text" name="name" id="name" placeholder="name" value={name} onChange={this.handleChange} style={{color: "#000"}} />
							</div>
							<div>
								<button type="submit" onClick={this.editItem}>edit an item</button>
							</div>
						</form>
					 : 	<form action="post">
							<div>
								<label htmlFor="name">name</label><br />
								<input type="text" name="name" id="name" placeholder="name" value={name} onChange={this.handleChange} style={{color: "#000"}} />
							</div>
							<div>
								<button type="submit" onClick={this.pushItem}>create a new one</button>
							</div>
						</form>
				}

			</div>
		);
	}
};

const mapStateToProps = (state) => {
    return {
		items: state.items.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		CreateItem: (item) => dispatch(create_item(item)),
		EditItem: (item) => dispatch(edit_item(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);