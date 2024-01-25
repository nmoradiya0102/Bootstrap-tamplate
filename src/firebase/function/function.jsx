import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../config";
// import { data } from "../../Data"; 

export const saveItem = async (data) => {
  console.log(data);
  await setDoc(doc(firestore, "test", `${Date.now()}`), data, { merge: true });
};

export const getAllData = async () => {
  const allItems = await getDocs(collection(firestore, "test"));
  allItems.docs.map((doc) => console.log(doc.data()));
};

export const postAllData = async () => {
    const newItem = doc(collection(firestore , "test"));
    return await setDoc(newItem , test);
};

export const updateAllData = async (data , updateAllData) => {
    const ItemRef = doc(collection(firestore , "test") , data);
    return await updateDoc(ItemRef , updateAllData);
};

export const deleteAllData = async (data) => {
    const ItemRef = doc(collection(firestore, "test") , data);
    return await deleteAllData(ItemRef)
}