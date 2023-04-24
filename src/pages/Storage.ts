import { Storage } from '@ionic/storage';
import { useEffect, useState } from "react";

const NOTES_KEY = 'my-notes'

export interface NoteItem {
    id: number;
    title: string;
    text: string;
}

export function useStorage() {
    const [store, setStore] = useState<Storage>();
    let [notes, setNotes] = useState<NoteItem[]>([]);
    useEffect(() => {
        const initStorage = async () => {
            const newStore = new Storage({
                name: 'NoteDB'
            });
            const store = await newStore.create();
            setStore(store);

            const storeNotes = await store.get(NOTES_KEY) || [];
            setNotes(storeNotes);
        }
        initStorage();
    }, []);

    const removeNote = async (id: number) => {
        const toUpdate = notes.filter(note => note.id !== id);
        setNotes(toUpdate);
        return store?.set(NOTES_KEY, toUpdate);
    }

    const updateNotes = async () => {
        setNotes(notes);
        return store?.set(NOTES_KEY, notes);
    }

    const addNote = (newTitle: string, newText: string) => {
        const newNote = {
            id: new Date().getTime(),
            title: newTitle,
            text: newText,
        }
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        notes = updatedNotes;
        console.log("Storage notes: " + notes);
        store?.set(NOTES_KEY, updatedNotes);
    }

    const getNotes = async () => {
        const storeNotes = await store?.get(NOTES_KEY) || [];
        setNotes(storeNotes);
    }

    return {
        notes,
        addNote,
        removeNote,
        updateNotes,
        getNotes
    }

}
