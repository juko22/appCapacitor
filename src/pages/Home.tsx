import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCard, 
  IonCardContent, IonCardTitle, IonButton, IonIcon, IonFab, IonFabButton, 
  IonNavLink, useIonRouter, IonCol, IonRow
} from '@ionic/react';
import React from 'react';

import './Home.css';
import trash from '../drawables/Trash.svg';
import add from '../drawables/Add.svg';

import AddingNote from './AddingNote';
import { useStorage } from './Storage';

const Home: React.FC = () => {

  const navigation = useIonRouter();
  const { notes, removeNote, getNotes, addNote } = useStorage();

  getNotes();

  const deleteNote = async (id: number) => {
    removeNote(id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <IonList>
          {notes.map((note, index) => (
            <IonCard color={"primary"} key={index}>
            <IonCardTitle>{note.title}</IonCardTitle>
            <IonCardContent>
              {note.text}
            </IonCardContent>
            <IonButton onClick={() => deleteNote(note.id)} color={'danger'}>
                Delete
              <IonIcon slot="end" icon={trash}></IonIcon>
            </IonButton>
          </IonCard>
          ))}
        </IonList>
      </IonContent>
      <IonRow>
        <IonCol>
          <div className="ion-float-end">
            <IonNavLink routerDirection="forward" component={AddingNote}>
            <IonFabButton onClick={(e) => {
              e.preventDefault();
              navigation.push('./AddingNote');
            }}>
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
