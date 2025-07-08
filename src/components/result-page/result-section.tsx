'use client';
import { useAppSelector } from '@/lib/hooks';
import { ReactNode, useEffect, useState } from 'react';
import { ModalLogo } from '../modal/modal-logo';
import styles from './result-section.module.scss';

const logos: [string, string][] = [
  ['#ffe815', '#ff513c'],
  ['#023856', '#a4e4f3'],
  ['#ff513c', '#ffffff'],
  ['#00dd95', '#023856'],
  ['#ffffff', '#ff513c'],
  ['#b5ffe3', '#00dd95'],
  ['#ff513c', '#ffe815'],
  ['#ffe815', '#023856'],
];

export function ResultSection() {
  const companyForm = useAppSelector((state) => state.companyForm);
  const [svgIcon, setSvgIcon] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<[string, string]>(['', '']);

  useEffect(() => {
    console.log('companyForm data:', companyForm);
    loadImg(companyForm.logoSrc);
  }, [companyForm]);

  async function loadImg(url: string) {
    const response = await fetch(url, { method: 'GET' });
    const svgText = await response.text();
    setSvgIcon(svgText);
    console.log(svgText);
  }

  function openModal(modalData: [string, string]) {
    setModalData(modalData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalData(['', '']);
    setIsModalOpen(false);
  }

  const svg = (
    <div
      dangerouslySetInnerHTML={svgIcon ? { __html: svgIcon } : undefined}
    ></div>
  );

  return (
    <section className="section-pt-2">
      <div className="container">
        <h2 className="h2 h-pb">
          Выберите <span className="purple">логотип</span>
        </h2>

        <div className={styles.grid}>
          {logos.map((data, index) => {
            return (
              <Logo
                svg={svg}
                text={companyForm.description}
                style={{ background: data[0], fill: data[1], color: data[1] }}
                onClick={() => openModal(data)}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <ModalLogo
        modalData={modalData}
        svg={svg}
        text={companyForm.description}
        isOpen={isModalOpen}
        closeModalCallback={closeModal}
      />
    </section>
  );
}

function Logo({
  svg,
  text,
  onClick,
  style,
}: {
  svg: ReactNode;
  text: string;
  onClick: () => void;
  style: object;
}) {
  return (
    <div className={styles.logo} style={style} onClick={onClick}>
      {svg}
      <p className="subtitle">{text}</p>
    </div>
  );
}

function Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="85"
      viewBox="0 0 101 85"
      fill="none"
    >
      <g clipPath="url(#clip0_1_5)">
        <path
          d="M78.8351 70.9943C74.6367 75.004 69.5477 77.0089 63.5681 77.0089C57.5885 77.0089 52.4995 75.004 48.3011 70.9943L17.767 41.8326C13.5686 37.8228 11.4694 32.9625 11.4694 27.2517C11.4694 21.5409 13.5686 16.6806 17.767 12.6708C21.9655 8.66111 27.0545 6.65624 33.034 6.65624C39.0136 6.65623 44.1026 8.66111 48.3011 12.6708L78.8351 41.8326C83.0335 45.8423 85.1328 50.7026 85.1328 56.4134C85.1327 62.1243 83.0335 66.9845 78.8351 70.9943ZM25.4005 19.9613C23.3013 21.9661 22.253 24.3963 22.2555 27.2517C22.2581 30.1071 23.3064 32.5373 25.4005 34.5421L40.6676 19.9613C38.5683 17.9564 36.0251 16.954 33.0379 16.954C30.0506 16.954 27.5048 17.9564 25.4005 19.9613ZM48.3011 56.4134L63.5681 41.8326L48.3011 27.2517L33.034 41.8326L48.3011 56.4134ZM71.2016 63.7039C73.3008 61.699 74.3517 59.2688 74.3542 56.4134C74.3568 53.558 73.3059 51.1279 71.2016 49.123L55.9346 63.7039C58.0338 65.7087 60.5796 66.7112 63.5719 66.7112C66.5642 66.7112 69.1075 65.7087 71.2016 63.7039Z"
          fill="black"
        />
        <circle cx="39" cy="41.5" r="1.5" fill="black" />
        <circle cx="44" cy="46.5" r="1.5" fill="black" />
        <circle cx="49" cy="51.5" r="1.5" fill="black" />
        <circle cx="43" cy="36.5" r="1.5" fill="black" />
        <circle cx="48" cy="41.5" r="1.5" fill="black" />
        <circle cx="53" cy="46.5" r="1.5" fill="black" />
        <circle cx="48" cy="32.5" r="1.5" fill="black" />
        <circle cx="53" cy="37.5" r="1.5" fill="black" />
        <circle cx="58" cy="42.5" r="1.5" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_1_5">
          <rect
            width="100"
            height="85"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
