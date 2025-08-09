import {
  addDays,
  format,
  startOfDay,
  startOfToday,
  startOfYesterday,
} from 'date-fns'

export const getToday = () => startOfToday()
export const getYesterday = () => startOfYesterday()
export { format, addDays, startOfDay }
