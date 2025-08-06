import { useEffect } from 'react'

import { DELETE_TEXT, ENTER_TEXT } from '../../constants/strings'
import { getStatuses } from '../../lib/statuses'
import { localeAwareUpperCase } from '../../lib/words'
import { Key } from './Key'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        let key = localeAwareUpperCase(e.key)
        
        // Спеціальні маппінги для англійської клавіатури
        if (e.code === 'Slash') { // / -> Â
          key = 'Â'
        } else if (e.code === 'Backslash') { // \ -> Ñ  
          key = 'Ñ'
        } else if (e.code === 'BracketLeft') { // [ -> Ğ
          key = 'Ğ'
        } else if (e.code === 'BracketRight') { // ] -> Ü
          key = 'Ü'
        } else if (e.code === 'Semicolon') { // ; -> Ş
          key = 'Ş'
        } else if (e.code === 'Quote') { // ' -> İ (кримськотатарське I з крапкою)
          key = 'İ'
        } else if (e.code === 'Comma') { // , -> Ö
          key = 'Ö'
        } else if (e.code === 'Period') { // . -> Ç
          key = 'Ç'
        } else if (key === 'I') { // Англійська I -> кримськотатарська I без крапки
          key = 'I'
        }
        
        // Crimean Tatar alphabet letters
        const validChars = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'Â']
        if (key.length === 1 && validChars.includes(key)) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="mb-1 flex justify-center">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
      <div className="mb-1 flex justify-center">
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ', 'Ñ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
      </div>
      <div className="flex justify-center">
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', 'Â'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
    </div>
  )
}
