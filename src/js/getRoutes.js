import React from 'react'
import { loadTextFiles } from './loadTextFiles'
import fansText from '../text/fans.txt'
import historyText from '../text/history.txt'

export const getRoutes = async () => {
  try {
    const textContents = await loadTextFiles(fetch, {fans: fansText, history: historyText})


    for (const key in textContents) {
      console.log(key)
    }

    return {}
  } catch(e) {
    return {}
  }
}
