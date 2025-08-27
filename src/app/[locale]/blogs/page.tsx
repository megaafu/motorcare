import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import React from "react";
import AllBlogs from "./components/AllBlogs";

function Blogs() {
  return (
    <>
      <div className="h-[30lvh] w-full bg-[#303136] flex flex-col justify-center items-center">
        <h4 className="mt-12 md:mt-20 text-white text-4xl">Blogs</h4>
      </div>
      <Container>
        <PagePadding>
          <AllBlogs />
        </PagePadding>
      </Container>
    </>
  );
}

export default Blogs;
