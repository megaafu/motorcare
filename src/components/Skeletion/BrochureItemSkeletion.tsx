const BrochureItemSkeletion = () => {
  return (
    <div className="flex h-[45vh] flex-col justify-between  lg:h-[65vh]">
      <div className="h-[40vh] w-full animate-pulse rounded-t-lg bg-slate-400 lg:h-[60vh]"></div>
      <div className="flex justify-end lg:justify-between">
        <div className="hidden h-8 w-[34%] animate-pulse rounded-full bg-slate-300 lg:flex"></div>
        <div className="hidden h-6 w-[30%] animate-pulse rounded-full bg-slate-300 lg:flex"></div>
      </div>
    </div>
  );
};

export default BrochureItemSkeletion;
