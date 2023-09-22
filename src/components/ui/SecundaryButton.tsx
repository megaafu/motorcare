import { cn } from '@/lib/util/util';
import Link from 'next/link';
import { ArrowFoword } from '../icons/Icons';
interface SecundaryButtonPropos {
  className?: string
  label: string
  href?: string

}
const SecundaryButton = ({
  label,
  className,
  href,
  ...props
}: SecundaryButtonPropos) => {
  return (
    <div className="flex justify-end pt-10">
      <Link
        href={href ? href : ""}
        className={cn(
          'alig-center group flex  underline underline-offset-8 text-primary/60 hover:text-secundary',
          className,
        )}
        {...props}
      >
        <p className="text-sm ">{label}</p>
        <ArrowFoword />
      </Link>
    </div>
  )
}

export default SecundaryButton
