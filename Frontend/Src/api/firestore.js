import { db, auth } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

export const addTrip = async (tripData) => {
  const user = auth.currentUser;
  if (!user) throw new Error('Not logged in');

  const docRef = await addDoc(collection(db, 'trips'), {
    userId: user.uid,
    ...tripData,
    checklist: [],
  });

  return docRef.id;
};

export const getUserTrips = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error('Not logged in');

  const q = query(collection(db, 'trips'), where('userId', '==', user.uid));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateChecklist = async (tripId, checklist) => {
  const tripRef = doc(db, 'trips', tripId);
  await updateDoc(tripRef, { checklist });
};

export const getTripById = async (tripId) => {
  const tripRef = doc(db, 'trips', tripId);
  const tripSnap = await getDoc(tripRef);
  if (!tripSnap.exists()) throw new Error('Trip not found');
  return { id: tripSnap.id, ...tripSnap.data() };
};

