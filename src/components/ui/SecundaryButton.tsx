import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ArrowFoword } from '../icons/Icons'
interface SecundaryButtonPropos {
  className?: string
  label: string
}
const SecundaryButton = ({ label, className }: SecundaryButtonPropos) => {
  return (
    <div className="flex justify-end pt-10">
      <Link
        href="#"
        className={twMerge(
          'alig-center group flex gap-2 rounded-lg border border-transparent px-5 py-2 text-primary hover:border-primary',
          className,
        )}
      >
        <p className="text-xl md:text-xl xl:text-xl ">{label}</p>
        <ArrowFoword />
      </Link>
    </div>
  )
}

export default SecundaryButton
