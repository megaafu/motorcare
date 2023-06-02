import { Car, Coins, Gear, Plus, User } from "@/components/icons/Icons"

interface items{
    label:string,
    icon:any
}

export const links:items[] =[
    {
      label:"Get a Quote",
      icon:Coins
    },
    {
      label:"Book a Test-Drive",
      icon: Car
    },
    {
      label:"Book a Service",
      icon:Gear
    },
    {
      label:"Learn More",
      icon:Plus
    },
    {
      label:"Contact Us",
      icon:User
    },
  ]