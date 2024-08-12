import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';
import { EmitFlags } from 'typescript';

export const config ={
    endpoint : 'https://cloud.appwrite.io/v1',
    platform : 'com.jsm.aura',
    projectId : '66ba3cf8002f66a5b765',
    databaseId : '66ba3ec800132afa1f7b',
    userCollectionId : '66ba3f00002e0d733cdc',
    videoCollectionId : '66ba3f1e00200f23377d',
    storageId : '66ba409600209c22434f'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username) => {
        try {
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username
            )
            if(!newAccount) throw Error;
            
            const avatarUrl = avatars.getInitials(username)

            await signIn(email, password);

            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId, 
                ID.unique(),
                {
                    accountId : newAccount.$id,
                    email, 
                    username,
                    avatar : avatarUrl
                }
            )

            return newUser;

        } catch (error) {
            console.log(error)
            throw new Error(error);
        }
    }

    export const  signIn = async (email, password) => {
        try {
            const session = await account.createEmailPasswordSession(email, password)
            return session;
        } catch (error) {
            throw new Error(error);
        }
    }

    export const getCurrentUser = async () => {
        try {
            const currentAccoount = await account.get();

            if(!currentAccoount) throw Error;

            const currentUser = await databases.listDocuments(
                config.databaseId, 
                config.userCollectionId,
                [
                    Query.equal('accountId', currentAccoount.$id)
                ],

            )

            if(!currentUser) throw Error;

            return currentUser.documents[0];

        } catch (error) {
            console.log(error)
        }
    }


