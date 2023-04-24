import React, { useRef } from "react";
import { IonList, IonItem, IonLabel, IonInput, IonPage, IonTextarea, IonButton, useIonRouter } from '@ionic/react';
import './AddingNote.css';
import { useStorage } from "./Storage";

const AddingNote: React.FC = () => {

    const { addNote, notes } = useStorage();
    const title = useRef<HTMLIonInputElement>(null);
    const text = useRef<HTMLIonTextareaElement>(null);
    const navigation = useIonRouter();

    const createNote = async () => {
        if (title.current != null && text.current != null && title.current.value!.toString() !== "" && text.current.value! !== "") {
            addNote(title.current.value!.toString(), text.current.value!)
            console.log("Add notes: " + notes);
            navigation.goBack();
        }
    }

    return (
    <IonPage>
        <IonList>
            <IonItem>
                <IonLabel>Title</IonLabel>
                <IonInput type="text" ref={title} placeholder="Enter note title"></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Text</IonLabel>
                <IonTextarea
                    placeholder="Type something here"
                    autoGrow={true}
                    ref={text}
                ></IonTextarea>
            </IonItem>
    </IonList>
    <IonButton onClick={() => {createNote()}}>Create note</IonButton>
    </IonPage>
    );
};

export default AddingNote;