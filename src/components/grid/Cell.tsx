import classnames from 'classnames'

import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { CharStatus } from '../../lib/statuses'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  useNewAnimation?: boolean
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  useNewAnimation = false,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent shadowed cell-absent text-white': status === 'absent',
      'correct shadowed cell-correct text-white': status === 'correct',
      'present shadowed cell-present text-white': status === 'present',
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal && !useNewAnimation,
      'cell-flip-new': shouldReveal && useNewAnimation,
    }
  )

  if (useNewAnimation) {
    const frontClasses = classnames('cell-face front', 'w-full h-full rounded', {
      'bg-white dark:bg-slate-900': !status,
    })

    const backClasses = classnames('cell-face back', 'w-full h-full rounded', {
      'absent shadowed cell-absent text-white': status === 'absent',
      'correct shadowed cell-correct text-white': status === 'correct',
      'present shadowed cell-present text-white': status === 'present',
    })

    return (
      <div className={classes} style={{ animationDelay }}>
        <div className={frontClasses}>{value}</div>
        <div className={backClasses}>{value}</div>
      </div>
    )
  }

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}