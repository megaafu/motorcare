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
                width={6048}
                height={4024}
                src={`${BASEURL}${banner.imagem}`}
                alt={`Image ${banner.id}`}
                className="w-full h-[45vh] lg:h-[85vh] aspect-video"
            />
            <Container>
                <div className='relative'>
                    <div className="absolute bottom-8  lg:bottom-16 left-0  ">
                        <p className="max-w-2xl text-xl text-start leading-6 tracking-tight text-white xl:text-4xl">
                            {banner.title}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BannerItem