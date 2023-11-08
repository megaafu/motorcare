"use client"
import BlogCard from '@/components/Card/BlogCard'
import Row from '@/components/ui/Row'
import useBlogs from '@/hooks/use-blogs'
import React from 'react'

function AllBlogs() {
    const { data, isLoading } = useBlogs()
    return (
        <>
            {isLoading ? <div /> : data ? (
                <>
                    <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-3">
                        {data.slice(0).reverse().slice(0, 3).map((post) => {
                            return <BlogCard key={post.id} blog={post} />
                        })}
                    </Row>
                </>
            ) : null}
        </>
    )
}

export default AllBlogs