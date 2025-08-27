interface ITimeLine {
  date: string;
  event: string;
  info: string;
}
interface IActivities {
  activities: ITimeLine[];
}
export const Activities: IActivities = {
  activities: [
    {
      date: "1996",
      event: "1996",
      info: "1996-info",
    },
    {
      date: "2000",
      event: "2000",
      info: "2000-info",
    },
    {
      date: "2008",
      event: "2008",
      info: "2008-info",
    },
    {
      date: "2011",
      event: "2011",
      info: "2011-info",
    },
    {
      date: "2014",
      event: "2014",
      info: "2014-info",
    },
    {
      date: "2023",
      event: "2023",
      info: "2023-info",
    },
  ],
};
