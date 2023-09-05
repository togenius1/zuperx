import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createContact } from '@/src/graphql/mutations';

// Insert comments
export async function insertContact(newContact: ContactType) {
    try {
        const insertedContact: GraphQLResult<any> | undefined =
            await API.graphql({
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
