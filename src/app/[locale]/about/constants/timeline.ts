interface ITimeLine {
  date: string
  event: string
}
interface IActivities {
  activities: ITimeLine[]
}
export const Activities: IActivities = {
  activities: [
    {
      date: '1996',
      event: '1996',
    },
    {
      date: '2000',
      event: '2000',
    },
    {
      date: '2008',
      event: '2008',
    },
    {
      date: '2011',
      event: '2011',
    },
    {
      date: '2014',
      event: '2014',
    },
    {
      date: '2023',
      event: '2023',
    },
  ],
}
