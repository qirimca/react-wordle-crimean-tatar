import {
  startOfToday,
  startOfYesterday,
  format,
  addDays,
  startOfDay,
} from 'date-fns'

export const getToday = () => startOfToday()
export const getYesterday = () => startOfYesterday()
export { format, addDays, startOfDay }
