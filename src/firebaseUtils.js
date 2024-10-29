import {initializeApp} from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getDocs,
    collection

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getDocFromDb = async (col, docId) => {
    const docRef = doc(db, col, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}
export const getDocsFromDb = async (col) => {
    const colref = collection(db, col);
    const docSnap = await getDocs(colref);
    const data = [];
    docSnap.forEach((doc) => {
        data.push(doc.data());
    }

    );
    return data;
}