import CardDescription from "../Card/CardDescription";
import CardRoot from "../Card/CardRoot";
import CardSub from "../Card/CardSub";
import CardTitle from "../Card/CardTitle";
import PrimaryButton from "../ui/PrimaryButton";

const BlogCardSkeletion = () => {
  return (
    <CardRoot className=" lg:aspect-[4/3]">
      <div className=" aspect-[4/3] h-[300px] w-full animate-pulse bg-slate-500 lg:h-3/4"></div>
      <div className="px-4 py-6">
        <CardTitle>
          <div className=" h-4 w-[80%] animate-pulse rounded bg-slate-400"></div>
        </CardTitle>
        <CardDescription>
          <div className="mt-4 h-3 w-[70%] animate-pulse rounded bg-slate-300"></div>
        </CardDescription>
        <CardSub>
          <div className=" "></div>
          <PrimaryButton>Read More</PrimaryButton>
        </CardSub>
      </div>
    </CardRoot>
  );
};

export default BlogCardSkeletion;
