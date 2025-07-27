import { cn } from "@/lib/util/util";
import CardDescription from "../Card/CardDescription";
import CardRoot from "../Card/CardRoot";
import CardSub from "../Card/CardSub";
import CardTitle from "../Card/CardTitle";

const CarousellCardSkeletion = ({ className }: { className?: string }) => {
  return (
    <CardRoot className="lg:aspect-[4/3]">
      <div className=" aspect-[4/3] h-[300px] w-full animate-pulse bg-slate-500 lg:h-3/4"></div>
      <div className={cn("px-4 py-6", className)}>
        <CardTitle>
          <div className=" h-4 w-2/5 animate-pulse rounded bg-slate-400"></div>
        </CardTitle>
        <CardDescription>
          <div className=" h-3 w-[30%] animate-pulse rounded bg-slate-300"></div>
          <div className=" h-3 w-[36%] animate-pulse rounded bg-slate-300"></div>
        </CardDescription>
        <CardSub>
          <div className=" h-2 w-[15%] animate-pulse rounded bg-slate-200"></div>
          <div className=" h-2 w-[15%] animate-pulse rounded bg-slate-200"></div>
          <div className=" h-2 w-[15%] animate-pulse rounded bg-slate-200"></div>
        </CardSub>
      </div>
    </CardRoot>
  );
};

export default CarousellCardSkeletion;
