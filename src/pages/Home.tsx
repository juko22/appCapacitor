import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCard, 
  IonCardContent, IonCardTitle, IonButton, IonIcon, IonFab, IonFabButton, 
  IonNavLink, IonNav, IonRouterOutlet, useIonRouter, IonCol, IonRow
} from '@ionic/react';
import React from 'react';

import './Home.css';
import trash from '../drawables/Trash.svg';
import add from '../drawables/Add.svg';

import AddingNote from './AddingNote';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

const notes = [
  {title: 'Pick up dry cleaning', text: 'Go to freedom street 17a and pick the suit from dry cleaning'},
  {title: 'Do homework', text: 'Solve math problem'},
  {title: 'Do homework', text: 'Solve math problem'},
  {title: 'Do homework', text: 'Solve math problem'},
  {title: 'Do homework', text: 'Solve math problem'}
];

const Home: React.FC = () => {

  const navigation = useIonRouter();

  var listItems = notes.map((note, index) =>
    <IonCard color={"primary"} key={index}>
      <IonCardTitle>{note.title}</IonCardTitle>
      <IonCardContent>
        {note.text}
      </IonCardContent>
      <IonButton  color={'danger'}>
        Delete
        <IonIcon slot="end" icon={trash}></IonIcon>
      </IonButton>
    </IonCard>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <IonList>
          {listItems}
        </IonList>
      </IonContent>
      <IonRow>
  <IonCol>
    <div className="ion-float-end">
      <IonNavLink routerDirection="forward" component={AddingNote}>
        <IonFabButton onClick={() => {navigation.push('./AddingNote')}}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonNavLink>
      </div>
  </IonCol>
</IonRow>

    </IonPage>
  );
};

export default Home;
