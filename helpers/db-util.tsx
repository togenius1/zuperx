import { DataStore } from 'aws-amplify';

import { Contact, LazyContact } from '@/src/models';

// Insert comments
export async function insertContact(
    newContact: ContactType
): Promise<LazyContact> {
    const insertedContact = await DataStore.save(new Contact(newContact));

    return insertedContact;
}

//############ Type ###############
interface ContactType {
    id: string;
    email?: string | null | undefined;
    name: string;
    message: string;
}
