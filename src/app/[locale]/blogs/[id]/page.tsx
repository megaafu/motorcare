import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import Paragraph from '@/components/ui/Paragraph'
import React from 'react'
import DetailBlog from './components/DetailBlog'


function Blog({ params, }: { params: { id: number }, }) {
    return (
        <>
            <div className="h-[440px] w-full bg-hero bg-cover bg-no-repeat"></div>
            <Container>
                <PagePadding>
                    <DetailBlog id={params.id} />
                </PagePadding>
            </Container>
        </>
    )
}

export default Blog