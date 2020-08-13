import React from 'react';
import { IonContent, IonPage } from '@ionic/react'
import Form from '../components/Form'

const EditItem: React.FC = (props: any) => {
	let param_id = props.match.params.id

	return (
	  <IonPage>
		<IonContent>
			<Form
				id={param_id}
			/>
		</IonContent>
	  </IonPage>
	);
};

  export default EditItem;