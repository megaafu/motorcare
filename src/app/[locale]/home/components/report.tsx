import Subscribe from '@/components/Subscribe'
import PagePadding from '@/components/ui/PagePadding'

const InformativeReport = () => {
  return (
    <div className="w-full bg-informative bg-cover bg-center bg-no-repeat">
      <PagePadding>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-md text-light-text">subscribe to our</span>
            <span className="text-md text-white lg:text-2xl">
              Informative Report
            </span>
          </div>
          <Subscribe />
        </div>
      </PagePadding>
    </div>
  )
}

export default InformativeReport
