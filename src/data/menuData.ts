interface IMenu {
    label: string;
    subMenu: string[];
  }

  export const BrochureMenu:IMenu ={
        label:"Presented Vehicles",
        subMenu:[
            ""
        ],
    }
  export const IsoMenu:IMenu ={
        label:"ISO Certification",
        subMenu:[
            ""
        ],
    }
  export const HistoryMenu:IMenu ={
      label:"Our History",
      subMenu:[
          ""
      ],
  }  
  export const CategoriesMenu:IMenu={
    label:"Categories",
    subMenu:["Vehicles", "Trucks", "Scooters"]
  }

  export const FindCarsMenu:IMenu={
    label:"Find your Car",
    subMenu:[ "All","New","Used" ]
  }


  export const BlogMenu:IMenu={
    label:"Blog",
    subMenu:["All","Trending", "last Week"]
  }

  export const AboutMenu:IMenu={
    label:"About US",
    subMenu:['Our History', 'Our Brands']
  }

  export const BrandsMenu:IMenu={
    label:'Our Brands',
    subMenu: ['Nissan','Renault','General Tyres', 'Maxxis Tyres', 'CST tyres','Continental']
  }
