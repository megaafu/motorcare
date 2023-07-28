import BrochureItemSkeletion from "@/components/Skeletion/BrochureItemSkeletion"
import ImagesSkeletion from "@/components/Skeletion/ImagesSkeletion"
import LateralScroll from "@/components/ui/LateralScoll"
import Row from "@/components/ui/Row"
import VerticalScroll from "@/components/ui/VerticalScroll"

const BrochureSkeletion = () => {
    const totalItems=3 
    const items = new Array(totalItems).fill(null)
  return (
    <>
        <Row className="grid-col-1  gap-8 lg:h-[65vh] lg:grid-cols-3">
            <VerticalScroll className="hidden lg:flex">
                {items.map((_,index)=>{
                    return(
                        <ImagesSkeletion key={index}/>
                    )
                })}
            </VerticalScroll>
            <LateralScroll className="lg:hidden">
                {items.map((_,index)=>{
                    return(
                        <div className=" h-10 w-[100vw] bg-slate-300 rounded-full animate-pulse" key={index}/>
                    )
                })}
              </LateralScroll>
            <div className="col-span-2">
                <BrochureItemSkeletion />
            </div>
        </Row>
    </>
  )
}

export default BrochureSkeletion