import React from 'react';
import { IonContent, IonPage } from '@ionic/react'

const TableShow: React.FC = (props: any) => {
	const param_id = props.match.params.id

	return (
	  <IonPage>
		<IonContent>
			test show id : {param_id}
		</IonContent>
	  </IonPage>
	);
};

  export default TableShow;