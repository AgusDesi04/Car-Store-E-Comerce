import { app } from './firebaseConfig';
import { getFirestore, collection,  getDocs} from 'firebase/firestore';






export function getProducts(collection){
  return getDocs(collection)
  .then((res) => {
    const productos = res.docs.map((doc) => {
      const producto = doc.data()
      producto._id = doc.id
      return producto
    })
    return productos
  })
  .catch(() => {
    console.log("Hubo un error")
  })
}

