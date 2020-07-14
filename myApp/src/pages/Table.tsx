// import React, { Component } from 'react';
// import { Props, StatelessComponent } from 'react';
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { IonList, IonItem } from '@ionic/react'

const Table: React.FC = () => {

	const list = [
		{
			id: 1,
			name: "Pokémon Yellow"
		},
		{
			id: 2,
			name: "Mega Man X"
		}
	]

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
		  <IonList>
		  	{list.map(item => {
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
};

  export default Table;