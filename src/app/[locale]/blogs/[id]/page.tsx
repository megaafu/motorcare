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
      <div className="h-[440px] w-full bg-hero bg-cover bg-no-repeat"></div>
      <Container>
        <PagePadding>
          <DetailBlog id={Number(blogId)} />
        </PagePadding>
      </Container>
    </>
  );
}

export default Blog;
