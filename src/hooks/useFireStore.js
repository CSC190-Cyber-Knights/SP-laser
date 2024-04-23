import {projectFireStore} from '../firebase/config.js'
import {useEffect, useState} from 'react'
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'

export const useFireStore = (category) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const q = query(collection(projectFireStore, category), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      let documents = []
      snap.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
      })
      setDocs(documents)
    })

    return () => unsub()
    // cleanup function
  }, [category])

  return {docs}
}

export default useFireStore
