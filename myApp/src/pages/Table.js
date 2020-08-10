import React, { Component } from 'react';
import { connect } from 'react-redux'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import { IonList, IonItem } from '@ionic/react'
import { delete_item } from '../store/actions/actions'

class Table extends Component {
	constructor(props) {
		super(props)
	}

	deleteItem = (item) => {
		console.log(item)
		this.props.DeleteItem(item)
	}

	render() {
		const { items } = this.props

		return (
			<IonPage>
			  <IonHeader>
				<IonToolbar>
				  <IonTitle>Table</IonTitle>
				</IonToolbar>
			  </IonHeader>
			  <IonContent>
				<IonHeader collapse="condense">
				  <IonToolbar>
					<IonTitle size="large">Table</IonTitle>
				  </IonToolbar>
				</IonHeader>
				<IonButton color="dark"><a href='/create'>Create a new item</a></IonButton>
				<IonList>
					{items.map(item => {
					  return (
						  <IonItem key={item.id}>
							  <a href={`/table/${item.id}`}>{item.name}</a>
							  <button type="submit" className="btn btn-alert" onClick={() => this.deleteItem(item)}>delete</button>
						  </IonItem>
					  )
				  })}
				</IonList>
				<IonList></IonList>
			  </IonContent>
			</IonPage>
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
        DeleteItem: (item) => dispatch(delete_item(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);