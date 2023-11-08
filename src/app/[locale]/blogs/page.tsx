import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import React from 'react'
import AllBlogs from './components/AllBlogs'

function Blogs() {
    return (
        <>
            <div className="h-[440px] w-full bg-hero bg-cover bg-no-repeat"></div>
            <Container>
                <PagePadding>
                    <AllBlogs />
                </PagePadding>
            </Container>
        </>
    )
}

export default Blogs