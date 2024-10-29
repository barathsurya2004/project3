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

export const setRandomDoc = async (col, data) => {
    const colref = collection(db, col);
    await setDoc(doc(colref), data);
}
const test= {
    name: "Dindigul Thalappakatti",
    location: "Dindigul",
    food: "Biryani",
    lat: 10.462890129065917,
    lng: 77.96361228641968,
    cuisine: "pandi",
}
  const placs = [
    {
      name: "Dindigul Thalappakatti",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.462890129065917,
        lng: 77.96361228641968,
      },
    },
    {
      name: "chettinadmanor",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.344027243217678,
        lng: 78.73814834574884,
      },
    },
    {
      name: "Athangudi Palace",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.157585454981055,
        lng: 78.72545598292346,
      },
    },
    {
      name: "Pallathur",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.384060216215431,
        lng: 78.81936659729178,
      },
    },
    {
      name: "JKB Hotel new president",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.299868983282456,
        lng: 78.73378498802997,
      },
    },
    {
      name: "Friends Restaurant",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.234371356989241,
        lng: 78.76231219111723,
      },
    },
    {
      name: "Sri Priya Mess",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.243728990496221,
        lng: 78.8574028680748,
      },
    },
    {
      name: "Amma Mess",
      food: "Biryani",
      location: "Dindigul",
      coord: {
        lat: 10.262443428724893,
        lng: 78.8383847326833,
      },
    },
  ];
//   placs.forEach((place) => {

// setRandomDoc("placesForMap", place).then(()=>{
//     console.log("done");
// });
//   })
// placs.forEach((place)=>{
//     setRandomDoc("placesForMap", place);
// })