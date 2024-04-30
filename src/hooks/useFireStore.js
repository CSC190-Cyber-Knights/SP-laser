import {db} from '../firebase/config.js'
import {useEffect, useState, useRef} from 'react'
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'

export const useFireStore = (id) => {
  const [docs, setDocs] = useState([])
  const [error, setError] = useState(null)
  const prevIdRef = useRef()
  const cache = useRef({})

  useEffect(() => {
    const colRef = collection(db, `images`)
    // only run the function if the id has changed
    if (id !== prevIdRef.current) {
      prevIdRef.current = id
    }
    console.log('useFireStore hook running', id)
    try {
      if (id === undefined) {
        setError('No category id provided')
      }
      if (cache.current[id]) {
        setDocs(cache.current[id])
      } else {
        let q = query(colRef, orderBy('createdAt', 'desc'))
        const unsub = onSnapshot(q, (snap) => {
          let documents = []
          snap.forEach((doc) => {
            documents.push({...doc.data(), id: doc.id})
            console.log(doc.data())
          })
          setDocs(documents)
        })
        return () => unsub()
      }
      // cleanup function
    } catch (err) {
      console.log(err)
      setError(err)
    }
  }, [id])

  return {docs, error}
}

export const useFirestoreDocs = (collectionPath) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const collectionRef = db.collection(collectionPath)
    collectionRef
      .get()
      .then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        setDocs(docsData)
      })
      .catch((error) => {
        console.log('Error fetching documents: ', error)
      })
  }, [collectionPath])

  return docs
}

export default useFireStore
