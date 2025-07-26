import { Title } from '@/components/Title'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import Row from '@/components/ui/Row'
import { getTranslations } from 'next-intl/server'
import SuggestionForm from './components/SugestionForm'

export interface IAppProps { }

export default async function Requests({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('Request')
  return (
    <>
      <div className="h-[340px] w-full bg-request-hero bg-cover bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <Title.Root>
            <Title.Label label={t('suggestions')} />
          </Title.Root>
          <Row className='lg:grid-cols-2'>
            <SuggestionForm />
            <Paragraph> </Paragraph>
          </Row>
        </PagePadding>
      </Container>
    </>
  )
}
