import { DataStore } from 'aws-amplify';

import { Contact } from '../src/models';

export async function insertContact(newContact: ContactType) {
    try {
        const insertedContact = await DataStore.save(new Contact(newContact));
        return insertedContact;
    } catch (error) {
        console.log('Error saving Contact', error);
    }
}

//############ Type ###############
interface ContactType {
    id: string;
    email: string;
    name: string;
    message: string;
}
