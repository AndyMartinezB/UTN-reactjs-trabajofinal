import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../config/firebase.js";

const productsCollection = collection(db, "products");

const addProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return {
    id: docRef.id,
    ...product,
  };
};

const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

const updateProduct = async (id, updates) => {
  const product = doc(db, "products", id);
  await updateDoc(product, updates);
  return {
    id,
    ...updates,
  };
};

const deleteProduct = async (id) => {
  const product = doc(db, "products", id);
  await deleteDoc(product);
  return id;
};

export { addProduct, getAllProducts, updateProduct, deleteProduct };
