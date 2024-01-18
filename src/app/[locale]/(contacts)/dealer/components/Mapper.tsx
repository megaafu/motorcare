/* eslint-disable @next/next/no-img-element */
'use client'

import { Accordion, Button, Card, Text } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import Autocomplete from 'react-google-autocomplete'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import RecenterAutomatically from './CenterMap'

interface PlaceCordinate {
  name: string | undefined
  lat: number
  lng: number
}


const Mapp = ({ name, image }: { name: string | undefined; image: string }) => {
  const GOOGLE_MAPS_API_KEY = 'AIzaSyAD-sDFj__5UcpWyxXU-VuxgqFK3XtVwC8'

  const [location, setLocation] = useState<PlaceCordinate>({
    lat: -19.831767430887417,
    lng: 34.842768295566614,
    name: 'Maputo',
  })

  const customIcon = new Icon({
    iconUrl: '/images/location.svg',
    iconSize: [75, 75],
  })

  const markers = [
    {
      name: 'Maputo',
      lat: -25.964677970962004,
      lng: 32.56043422890941,
      description: 'Sede: Maputo',
      avenida: 'Rua Kanwalanga N.141',
    },
    {
      name: 'Pemba',
      lat: -13.009611051159483,
      lng: 40.53329661075185,
      description: 'Delegação de Pemba',
      avenida: 'E.N.106 Bairro do Alto Giongone',
    },
    {
      name: 'Nampula',
      lat: -15.103817890661702,
      lng: 39.26370586526631,
      description: 'Delegação da Nampula',
      avenida: 'Rua da França, Parcela 3, Bairro da Carrupeia',
    },
    {
      name: 'Tete',
      lat: -16.058213944734714,
      lng: 33.71656936815897,
      description: 'Delegação de Moatize',
      avenida: 'E.N.7 Unidade 25 de Setembro, Chithatha Moatize, Tete',
    },
    {
      name: 'Beira',
      lat: -19.831767430887417,
      lng: 34.842768295566614,
      description: 'Delegação da beira',
      avenida: 'Av. Samora Machel, n.3024, Beira',
    },
  ]

  return (
    <div>
      <MapContainer
        center={[-25.9686, 32.5804]}
        style={{ height: '74vh' }}
        zoom={6}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <div className="absolute bottom-[5%] left-[6%] top-[5%] z-[1000] w-[32%] overflow-y-auto  bg-white shadow-lg">
          <div className="flex flex-col p-10">
            <p className="text-2xl font-bold ">
              Encontre sua <br />
              Concessionária
            </p>

            <form method="post">
              <div className="py-6">
                <Autocomplete
                  className="w-full border px-2 py-4"
                  placeholder="Endereço da Concessionária"
                  apiKey={GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => {
                    const searchPlace: PlaceCordinate = {
                      name: '',
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    }
                    setLocation(searchPlace)
                  }}
                />
              </div>
              <div>
                <Button className="w-full bg-primary" radius="xs" size="md">
                  Pesquisar
                </Button>
              </div>
            </form>
          </div>
          <div className="px-10">
            <div className="space-y-6">
              <Accordion
                className="border-gray-200 border-2 bg-white shadow-lg"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Accordion.Item value="flexibility">
                  <Accordion.Control>MAPUTO</Accordion.Control>
                  <Accordion.Panel className='bg-slate-200 pt-2'>
                    <p>PHONE: 21 35 08 00</p>
                    <p>EMAIL: info@mz.motorcare.com</p>
                    <p>Endeço Físico: Rua Kanwalanga N.141</p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion
                className="border-gray-200 border-2 bg-white shadow-lg"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Accordion.Item value="flexibility">
                  <Accordion.Control>BEIRA</Accordion.Control>
                  <Accordion.Panel className='bg-slate-200 pt-2'>
                    <p>PHONE: 23 32 65 03</p>
                    <p>EMAIL: info@mz.motorcare.com</p>
                    <p>Endereço Físico: Av. Samora Machel, n.3024, Beira</p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion
                className="border-gray-200 border-2 bg-white shadow-lg"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Accordion.Item value="flexibility">
                  <Accordion.Control>MOATIZE</Accordion.Control>
                  <Accordion.Panel className='bg-slate-200 pt-2'>
                    <p>PHONE: 25 24 22 20</p>
                    <p>EMAIL: info@mz.motorcare.com</p>
                    <p>Endereço Físico: E.N.7 Unidade 25 de Setembro, Chithatha Moatize, Tete</p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion
                className="border-gray-200 border-2 bg-white shadow-lg"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Accordion.Item value="flexibility">
                  <Accordion.Control>NAMPULA</Accordion.Control>
                  <Accordion.Panel className='bg-slate-200 pt-2'>
                    <p>
                      PHONE: 26 21 72 51
                    </p>
                    <p>
                      EMAIL: info@mz.motorcare.com
                    </p>
                    <p>Endereço Físico: Rua da França, Parcela 3, Bairro da Carrupeia</p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion
                className="border-gray-200 border-2 bg-white shadow-lg"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
              >
                <Accordion.Item value="flexibility">
                  <Accordion.Control>PEMBA</Accordion.Control>
                  <Accordion.Panel className='bg-slate-200 pt-2'>
                    <p>PHONE: 27 22 07 71</p>
                    <p>EMAIL: info@mz.motorcare.com</p>
                    <p>Endereço Físico: E.N.106 Bairro do Alto Giongone</p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>
              <Card shadow="sm" padding="sm" withBorder>
                <Text size="sm">
                  <p className="font-bold text-black">{marker.description}</p>
                  <span className=" text-black">{marker.avenida}</span>
                </Text>
              </Card>
            </Popup>
          </Marker>
        ))}
        <RecenterAutomatically lat={location.lat} lng={location.lng} />
      </MapContainer>
    </div>
  )
}

export default Mapp