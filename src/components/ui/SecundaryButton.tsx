import { cn } from '@/lib/util/util';
import Link from 'next/link';
import { ArrowFoword } from '../icons/Icons';
interface SecundaryButtonPropos {
  className?: string
  label: string
}
const SecundaryButton = ({ label, className }: SecundaryButtonPropos) => {
  return (
    <div className="flex justify-end pt-10">
      <Link
        href="#"
        className={cn(
          'alig-center group flex  underline underline-offset-8 text-primary/60 hover:text-secundary',
          className,
        )}
      >
        <p className="text-md md:text-lg xl:text-xl">{label}</p>
        <ArrowFoword/>
      </Link>
    </div>
  )
}

export default SecundaryButton
