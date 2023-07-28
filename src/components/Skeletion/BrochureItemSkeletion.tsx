
const BrochureItemSkeletion = () => {
  return (
    <div className="flex flex-col justify-between h-[45vh]  lg:h-[65vh]">
        <div className="h-[40vh] w-full bg-slate-400 rounded-t-lg animate-pulse lg:h-[60vh]"></div>
        <div className="flex justify-end lg:justify-between">
            <div className="hidden h-8 w-[34%] lg:flex bg-slate-300 rounded-full animate-pulse"></div>
            <div className="hidden h-6 w-[30%] lg:flex bg-slate-300 rounded-full animate-pulse"></div>
        </div>
    </div>
  )
}

export default BrochureItemSkeletion