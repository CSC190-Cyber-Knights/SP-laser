import {projectFireStore} from '../firebase/config.js'
import {useEffect, useState, useRef} from 'react'
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'

export const useFireStore = (id) => {
  const [docs, setDocs] = useState([])
  const [error, setError] = useState(null)
  const prevIdRef = useRef()
  const cache = useRef({})

  useEffect(() => {
    const colRef = collection(projectFireStore, `images`)
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

export default useFireStore
