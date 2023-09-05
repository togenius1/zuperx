import { API } from 'aws-amplify';

import { createContact } from '@/src/graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api';

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
    id: string;
    email: string;
    name: string;
    message: string;
}
