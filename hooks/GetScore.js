import { useEffect, useState } from 'react'
import { getScore, saveScore } from '../utilities/storage'

export function useHoleScore(holeNumber) {
  const [score, setScore] = useState('')

  useEffect(() => {
    async function getScoreForHole() {
      const savedScore = await getScore(holeNumber)
      if (savedScore !== null && savedScore !== undefined) {
        setScore(savedScore.toString())
      }
    }
    getScoreForHole()
  }, [holeNumber])

  async function saveUserScore() {
    await saveScore(holeNumber, score)
  }

  return { score, setScore, saveUserScore }
}
