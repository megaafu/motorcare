import Menu from '@/components/Menu'
import Container from '@/components/ui/Container'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import React from 'react'
import CustomAccording from './According'
import Row from './Row'
import Paragraph from './Paragraph'
import CustomTimeLine from './CustomTimeLine'

type Props = {}

function About({}: Props) {
    const events = [
        {
          title: 'Event 1',
          description: 'Event 1 description',
          date: 'May 1, 2023',
        },
        {
          title: 'Event 2',
          description: 'Event 2 description',
          date: 'May 15, 2023',
        },
        {
            title: 'Event 3',
            description: 'Event 2 description',
            date: 'May 15, 2023',
          },
        // Add more events as needed
      ];
  return (
    <main>
        <div className='bg-about-hero w-full h-[360px] bg-cover bg-center bg-no-repeat'>
        </div>
        <Container>
            <PagePadding>
                <Menu title='About US' navigation={['Our History', 'Our Brands']} />
                <ContentPadding>
                    <h4 className='text-2xl text-sky-700 text-bold pb-4'>Lorem Ipson</h4>
                    <Row>
                        <div> 
                            <Paragraph>
                                But I must explain to you how all this mistaken idea of denouncing pleasure
                                and praising pain was born and I will give you a complete account of the system,
                                and expound the actual teachings of the great explorer of the truth, 
                                the master-builder of human happiness. No one rejects, dislikes, 
                                or avoids pleasure itself, because it is pleasure, but because those 
                                who do not know how to pursue pleasure rationally encounter consequences 
                                that are extremely painful. Nor again is there anyone who loves or pursues 
                                or desires to obtain pain of itself, because it is pain, but because occasionally 
                                circumstances occur in which toil and pain can procure him some great pleasure. 
                                To take a trivial example, which of us ever undertakes laborious physical exercise, 
                                except to obtain some advantage from it? But who has any right to find fault with a man 
                            
                            </Paragraph>
                        </div>
                        <div className='w-full justify-center items-center'>
                            <img className='rounded-2xl' src="images/bg-hero.png" alt="img" />
                        </div>
                    </Row>
                </ContentPadding>
                <ContentPadding>
                    <Row>
                        <div className=' relative w-full h-[440px] '>
                            <img src='images/card-1.png' className=' absolute top-0 right-0  w-[380px] h-[240px] z-0 rounded-3xl opacity-80 border shadow-xl shadow-blue-gray-900/50'  /> 
                            <img src='images/card-2.png' className=' absolute bottom-32 left-0  w-[380px] h-[240px] z-10 rounded-3xl opacity-90 border shadow-xl shadow-blue-gray-900/50'/> 
                            <img src='images/bg-about.png' className=' absolute right-16 bottom-0  w-[380px] h-[240px] z-20 rounded-3xl border shadow-xl shadow-blue-gray-900/50'/>    
                        </div>
                        <div className=''>
                            <CustomAccording/>
                        </div>
                    </Row>
                </ContentPadding>
            </PagePadding>
            <PagePadding>
                <div>
                <Menu title='Our Brands' navigation={['Nissan','Renault','General Tyres', 'Niu', 'CST tyres','Continental']} />
                <ContentPadding>
                    <div className='bg-nissan bg-no-repeat bg-contain bg-center'>
                        <h4 className='text-2xl text-sky-700 text-bold pb-4'>Lorem Ipson</h4>
                        <Row>
                            <div>
                                <Paragraph>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure
                                    and praising pain was born and I will give you a complete account of the system,
                                    and expound the actual teachings of the great explorer of the truth, 
                                    the master-builder of human happiness. No one rejects, dislikes, 
                                    or avoids pleasure itself, because it is pleasure, but because those 
                                    who do not know how to pursue pleasure rationally encounter consequences 
                                    that are extremely painful. Nor again is there anyone who loves or pursues 
                                    or desires to obtain pain of itself, because it is pain, but because occasionally 
                                    circumstances occur in which toil and pain can procure him some great pleasure. 
                                    To take a trivial example, which of us ever undertakes laborious physical exercise, 
                                    except to obtain some advantage from it? But who has any right to find fault with a man 
                                
                                </Paragraph>
                            </div>
                            <div className='w-full grid grid-cols-3 gap-12'>
                                <img className='w-44 h-44' src="images/nissan.png" alt="img" />
                                <img className='w-44 h-44' src="images/maxxis.png" alt="img" />
                                <img className='w-44 h-44' src="images/cst.png" alt="img" />
                                <img className='w-44 h-44' src="images/renault.png" alt="img" />
                                <img className='w-44 h-44' src="images/generaltire.png" alt="img" />
                                <img className='w-44 h-44' src="images/continental.png" alt="img" />
                            </div>
                        </Row>
                    </div>
                </ContentPadding>
                </div>
            </PagePadding>
            <PagePadding>
                <Menu title='Our History' navigation={['Our History', 'Our Brands']} />
                <ContentPadding>
                    <Row>
                        <div>
                            <h4 className='text-2xl text-sky-700 text-bold pb-4'>Lorem Ipson</h4>
                            <Paragraph>
                                But I must explain to you how all this mistaken idea of denouncing pleasure
                                and praising pain was born and I will give you a complete account of the system,
                                and expound the actual teachings of the great explorer of the truth, 
                                the master-builder of human happiness. No one rejects, dislikes, 
                                or avoids pleasure itself, because it is pleasure, but because those 
                                who do not know how to pursue pleasure rationally encounter consequences 
                                that are extremely painful. Nor again is there anyone who loves or pursues 
                                or desires to obtain pain of itself, because it is pain, but because occasionally 
                                circumstances occur in which toil and pain can procure him some great pleasure. 
                                To take a trivial example, which of us ever undertakes laborious physical exercise, 
                                except to obtain some advantage from it? But who has any right to find fault with a man 
                            
                            </Paragraph>
                        </div>
                        <div className='w-full flex justify-center items-end'>
                            <CustomTimeLine events={events}/>
                        </div>
                    </Row>
                </ContentPadding>
            </PagePadding>
            <PagePadding>
                <Menu title='ISO Certification' navigation={[]} />
                <ContentPadding>
                    <h4 className='text-2xl text-sky-700 text-bold pb-4'>Lorem Ipson</h4>
                    <Row>
                        <div>
                            
                            <Paragraph>
                                But I must explain to you how all this mistaken idea of denouncing pleasure
                                and praising pain was born and I will give you a complete account of the system,
                                and expound the actual teachings of the great explorer of the truth, 
                                the master-builder of human happiness. No one rejects, dislikes, 
                                or avoids pleasure itself, because it is pleasure, but because those 
                                who do not know how to pursue pleasure rationally encounter consequences 
                                that are extremely painful. Nor again is there anyone who loves or pursues 
                                or desires to obtain pain of itself, because it is pain, but because occasionally 
                                circumstances occur in which toil and pain can procure him some great pleasure. 
                                To take a trivial example, which of us ever undertakes laborious physical exercise, 
                                except to obtain some advantage from it? But who has any right to find fault with a man 
                            </Paragraph>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <img className='w-64' src="images/iso.png" alt="img" />
                        </div>
                    </Row>
                </ContentPadding>    
            </PagePadding>
        </Container>
    </main>
  )
}

export default About