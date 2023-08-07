import { cn } from "@/lib/util/util";
import CardDescription from "../Card/CardDescription";
import CardRoot from "../Card/CardRoot";
import CardSub from "../Card/CardSub";
import CardTitle from "../Card/CardTitle";

const CarousellCardSkeletion = ({ className }: { className?: string }) => {
    const totalItems = 3
    const items = new Array(totalItems).fill(null)
    return (
        <CardRoot className={cn("lg:aspect-[4/3]", className)} key={Math.random()}>
            <div className=" aspect-[4/3] bg-slate-500 w-full h-[300px] lg:h-3/4 animate-pulse"></div>
            <div className="px-4 py-6" key={Math.random()}>
                <CardTitle>
                    <div className=" h-4 w-2/5 bg-slate-400 rounded animate-pulse"></div>
                </CardTitle>
                <CardDescription>
                    <div className=" h-3 w-[30%] bg-slate-300 rounded animate-pulse"></div>
                    <div className=" h-3 w-[36%] bg-slate-300 rounded animate-pulse"></div>
                </CardDescription>
                <CardSub>
                    <div className=" h-2 w-[15%] bg-slate-200 rounded animate-pulse"></div>
                    <div className=" h-2 w-[15%] bg-slate-200 rounded animate-pulse"></div>
                    <div className=" h-2 w-[15%] bg-slate-200 rounded animate-pulse"></div>
                </CardSub>
            </div>
        </CardRoot>


    )
}

export default CarousellCardSkeletion