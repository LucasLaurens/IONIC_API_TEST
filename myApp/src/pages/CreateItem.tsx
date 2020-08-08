import React from 'react';
import { IonContent, IonPage } from '@ionic/react'
import Form from '../components/Form'

const CreateItem: React.FC = (props: any) => {

	return (
	  <IonPage>
		<IonContent>
			<Form />
		</IonContent>
	  </IonPage>
	);
};

  export default CreateItem;