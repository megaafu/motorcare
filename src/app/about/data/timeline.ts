interface ITimeLine{
    date:string
    event:string
}
interface IActivities{
    activities:ITimeLine[]
}
export const Activities:IActivities ={
    activities:[
        {
            date:'1996',
            event:'MotorCare starts operating in Mozambique-Matola.'
        },
        {
            date:'2000',
            event:'MotorCare change location from Matola to Maputo.'
        },
        {
            date:'2008',
            event:'Inauguration of the Beira and Nampula delegations.'
        },
        {
            date:'2011',
            event:'Nampula opens new facilities.'
        },
        {
            date:'2014',
            event:' Inauguration of the Moatize and Pemba facilities.'
        },
        {
            date:'2023',
            event:'Restructuring of the Maputo, Beira, and Nampula delegations.'
        },
    ]
}
  
