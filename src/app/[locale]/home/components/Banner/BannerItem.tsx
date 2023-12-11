import Container from '@/components/ui/Container'
import { BASEURL } from '@/lib/util/util'
import { IBanner } from '@/model/banner'
import Image from 'next/image'
import React from 'react'

const BannerItem = ({ banner }: { banner: IBanner }) => {
    return (
        <div className='relative'>
            <div className='absolute  bottom-0 left-0 top-0 right-0 bg-gradient-to-b from-transparent to-black/60' />

            <Image
                loader={() => `${BASEURL}${banner.imagem}`}
                width={2560}
                height={1440}
                src={`${BASEURL}${banner.imagem}`}
                alt={`Image ${banner.id}`}
                className="w-full aspect-[5/4]  md:aspect-[16/9] lg:aspect-[21/9] object-cover"
            />
            <Container>
                <div className='relative'>
                    <div className="absolute bottom-8  lg:bottom-16 left-0  ">
                        <p className="max-w-2xl text-lg line-clamp-1 text-start leading-6 tracking-tight text-white md:line-clamp-none md:text-2xl xl:text-4xl">
                            {banner.title}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BannerItem