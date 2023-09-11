import { useState, useEffect } from 'react'

import { JsonData } from '../types/JsonData'

export default function useMockAPIFetch(jsonURL:string) {

  const [data, setData] = useState<JsonData[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect( () => {

    // let timeout:ReturnType<typeof setTimeout>

    const delayFetch = async () => {
      try {
        const response = await fetch(`${jsonURL}`)
        return await response.json()
      } catch(error) {
          console.error(error)
      }
    }

    const timeout = setTimeout(() => {

      delayFetch().then((resData) => {
        console.log('res data: ', resData)
        setData(resData)
        setIsLoading(false)
      }).catch(() => {
        setError(true)
      })

    }, 3000)

    return () => {
      clearTimeout(timeout)
    }

  }, [isLoading, jsonURL])

  return {
    data,
    isLoading,
    error
  }

}