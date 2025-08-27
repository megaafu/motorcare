"use client"
import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import React from "react";
import DetailBlog from "./components/DetailBlog";
import { useParams } from "next/navigation";

function Blog() {
  const params = useParams();
  const blogId = params.id as string;

  return (
    <>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">Blogs</h4>
      </div>
      <Container>
        <PagePadding>
          <DetailBlog id={Number(blogId)} />
        </PagePadding>
      </Container>
    </>
  );
}

export default Blog;
