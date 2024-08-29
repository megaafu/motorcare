export default function formatedDate(date: Date): Date | string {
  if (!date) return ''

  const formatedDate = new Date(date)
  return formatedDate.toLocaleDateString('pt-Pt', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

}


