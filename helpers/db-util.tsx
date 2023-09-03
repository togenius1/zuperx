import { DataStore } from 'aws-amplify';

// import { Contact, LazyContact } from '@/src/models';

// Insert comments
export async function insertContact(
    newContact: ContactType
): Promise<ContactType> {
    // const insertedContact = await DataStore.save(new Contact(newContact));
    const insertedContact = { id: '', name: '', email: '', message: '' };

    return insertedContact;
}

//############ Type ###############
interface ContactType {
    id: string;
    email?: string | null | undefined;
    name: string;
    message: string;
}
