import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import Row from '@/components/ui/Row'
import { getTranslator } from 'next-intl/server'
import TradeInForm from './components/TradeInForm'
import formatTextWithLineBreaks from '@/lib/util/formatTextWithInnerHTML'


export default async function Requests({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslator(locale, 'Request')

  return (
    <>
      <div className="h-[340px] w-full bg-request-hero bg-cover bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t('trade_in')} />
          </Title.Root>
          <Row className='lg:grid-cols-2'>
            <TradeInForm />
            <Paragraph dangerouslySetInnerHTML={{ __html: formatTextWithLineBreaks(t('trade_info')) }}>

            </Paragraph>
          </Row>
        </PagePadding>
      </Container>
    </>
  )
}
