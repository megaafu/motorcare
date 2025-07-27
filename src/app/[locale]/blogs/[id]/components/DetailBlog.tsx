"use client";
import Paragraph from "@/components/ui/Paragraph";
import Row from "@/components/ui/Row";
import useBlogs from "@/hooks/use-blogs";
import { BASEURL } from "@/lib/util/util";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const DetailBlog = ({ id }: { id: number }) => {
  const { data, isLoading } = useBlogs();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isLoading ? (
        <div className="h-screen" />
      ) : data ? (
        <>
          {data
            .filter((blog) => blog.id == id)
            .map((blog) => {
              const images: string[] = JSON.parse(blog.image);
              return (
                <Row key={blog.id} className="grid-cols-1 md:grid-cols-2">
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <Image
                        key={image}
                        loader={() => `${BASEURL}${image}`}
                        width={6048}
                        height={4024}
                        quality={100}
                        src={`${BASEURL}${image}`}
                        alt={`Image ${index}`}
                        className="aspect-[5/4] h-full w-full bg-cover"
                      />
                    ))}
                  </Slider>
                  <Paragraph>
                    <article
                      dangerouslySetInnerHTML={{ __html: `${blog.text}` }}
                    ></article>
                  </Paragraph>
                </Row>
              );
            })}
        </>
      ) : null}
    </>
  );
};

export default DetailBlog;
