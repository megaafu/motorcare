import Container from '@/components/ui/Container'
import { BASEURL } from '@/lib/util/util'
import { IBanner } from '@/model/banner'
import Image from 'next/image'
import React from 'react'

const BannerItem = ({ banner }: { banner: IBanner }) => {
    console.log(banner)
    return (
        <>
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
                    <div className="absolute bottom-8  lg:bottom-24 left-0  ">
                        <p className="max-w-2xl text-2xl text-start leading-none tracking-tight text-white xl:text-5xl">
                            {banner.title}
                        </p>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default BannerItem