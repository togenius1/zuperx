import { DataStore } from 'aws-amplify';
import { API } from 'aws-amplify';

import { Contact } from '@/src/models';
import { createContact } from '@/src/graphql/mutations';

// Insert comments
export async function insertContact(newContact: ContactType) {
    try {
        const insertedContact = await API.graphql({
            query: createContact,
            variables: {
                input: {
                    email: newContact?.email,
                    name: newContact?.name,
                    message: newContact?.message,
                },
            },
        });
        return insertedContact;
    } catch (error) {
        console.log('Error saving Contact', error);
    }
}

//############ Type ###############
interface ContactType {
    id: string | undefined;
    email: string;
    name: string;
    message: string;
}
