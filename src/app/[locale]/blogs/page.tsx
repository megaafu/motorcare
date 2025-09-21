import Container from "@/components/ui/Container";
import PagePadding from "@/components/ui/PagePadding";
import React from "react";
import AllBlogs from "./components/AllBlogs";

function Blogs() {
  return (
    <>
      <div className="h-[30vh] min-h-[250px] w-full bg-[#303136] flex flex-col gap-4 justify-center items-center text-center px-4">
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
