import React, { Component } from 'react';
import { connect } from 'react-redux'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import { IonList, IonItem } from '@ionic/react'

class Table extends Component {
	constructor(props) {
		super(props)
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

export default connect(mapStateToProps, null)(Table);