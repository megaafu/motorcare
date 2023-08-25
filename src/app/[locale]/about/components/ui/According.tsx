'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { AllAcording } from '../../constants/acordings';
import Icon from './Icon';

const CustomAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };

  const t = useTranslations('About')
  return (
    <div>
      {AllAcording.acordings.map((acording) => (
        <div
          key={acording.id}
          className={`mb-4 bg-sky-100 px-8 py-5 transition-all duration-300 ${
            open === acording.id ? 'max-h-50' : 'max-h-20'
          } overflow-hidden`}
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleOpen(acording.id)}
          >
            <div className="text-bold text-xl text-black">
              {t(acording.title)}
            </div>
            <Icon id={0} open={open === acording.id} />
          </div>
          {open === acording.id && (
            <div className="py-4 text-lg text-light-text">
              <ul className='pl-4 list-disc flex flex-col gap-2'>
                {acording.description.map((description)=>(<li>{t(description)}</li>))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CustomAccordion;

