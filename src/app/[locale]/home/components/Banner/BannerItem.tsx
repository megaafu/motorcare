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
                width={1080}
                height={1080}
                src={`${BASEURL}${banner.imagem}`}
                alt={`Image ${banner.id}`}
                className="w-full h-[85vh]"
            />
            <Container>
                <div className='relative'>
                    <div className="absolute bottom-24 left-0  ">
                        <p className="max-w-2xl text-3xl text-start leading-none tracking-tight text-white xl:text-5xl">
                            {banner.title}
                        </p>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default BannerItem