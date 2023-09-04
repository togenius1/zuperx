'use client';
import { DataStore } from 'aws-amplify';

import { Contact } from '@/src/models';

// Insert comments
export async function insertContact(newContact: ContactType) {
    try {
        const insertedContact = await DataStore.save(new Contact(newContact));

        return insertedContact;
    } catch (error) {
        console.log('Error saving post', error);
    }
}

//############ Type ###############
interface ContactType {
    id: string | undefined;
    email: string;
    name: string;
    message: string;
}
