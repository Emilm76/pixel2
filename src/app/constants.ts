import businessPreviewImg from '@/images/cases-preview/business.jpg';
import comboPreviewImg from '@/images/cases-preview/combo.jpg';
import hermitagePreviewImg from '@/images/cases-preview/hermitage.jpg';
import lStudioPreviewImg from '@/images/cases-preview/l-studio.jpg';
import remontStylePreviewImg from '@/images/cases-preview/remont-style.jpg';
import siyaniePreviewImg from '@/images/cases-preview/siyanie.jpg';
import tochkaVkusaPreviewImg from '@/images/cases-preview/tochka-vkusa.jpg';
import tracePreviewImg from '@/images/cases-preview/trace.jpg';
import usiPreviewImg from '@/images/cases-preview/usi.jpg';

import businessImg from '@/images/cases/business-start.jpg';
import comboImg from '@/images/cases/combo.jpg';
import usiImg from '@/images/cases/gk-usi.jpg';
import hermitageImg from '@/images/cases/hermitage.jpg';
import lStudioImg from '@/images/cases/l-studio.jpg';
import remontStyleImg from '@/images/cases/remont-style.jpg';
import siyanieImg from '@/images/cases/siyanie.jpg';
import tochkaVkusaImg from '@/images/cases/tochka-vkusa.jpg';
import traceImg from '@/images/cases/trace.jpg';
import { StaticImageData } from 'next/image';

const CASE_CATEGORIES = {
  site: 'site',
  branding: 'branding',
};

export type Cases = {
  image: StaticImageData;
  name: string;
  labels: string[];
  categories: typeof CASE_CATEGORIES;
  modal: CasesModalData;
};

export type CasesModalData = {
  title: string[];
  description: string;
  image: StaticImageData | null;
  siteHref: string;
};

/* 
TODO: Добавить кейсы:
Доммаркет
Юг-Стройсофт
Высота
Дружба
Эрмитаж
Печорин
Norled
Сияние
Смартполет
ЮгПроектКубань
*/

// TODO: Заменить изображения на более качественные

/* Первые 4:
Эрмитаж
Norled
Trace
RemontStyle
*/

export const CASES = [
  {
    image: hermitagePreviewImg,
    name: 'Эрмитаж',
    labels: ['Первый культурный квартал', '«Эрмитаж»'],
    categories: [CASE_CATEGORIES.site],
    modal: {
      title: ['Сайт для салона красоты', '«L’Studio»'],
      description:
        'Современный, сдержанный, впечатляющий — это все про сайт, разработанный нашей командой.',
      image: hermitageImg,
      siteHref: 'https://kvartal-hermitage.ru/',
    },
  },
  {
    image: tracePreviewImg,
    name: 'Trace',
    labels: ['Семейная винодельня', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
    modal: {
      title: ['Брендинг для семейной винодельни', '«Trace»'],
      description:
        'Разработали логотип и нэйминг для небольшой семейной винодельни. Это авторский продукт, каждую бутылку вина владельцы компании изготовливают самостоятельно, и в этом его особенность, которую мы решили подчеркнуть. Название – «Trace», выбрано не случайно, в переводе означает «След». В логотипе использовали специальные элементы: это отпечаток пальца, а также подпись владельца и уникальная маркировка, которые заполняются на этикетке вручную.',
      image: traceImg,
      siteHref: '',
    },
  },
  {
    image: remontStylePreviewImg,
    name: 'РемонтStyle',
    labels: ['Строительная компания', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
    modal: {
      title: ['Многостраничный сайт', '«РемонтStyle»'],
      description:
        'Разработали основательный сайт для строительной компании, который поможет выделиться среди конкурентов и привлечь новых клиентов.',
      image: remontStyleImg,
      siteHref: 'https://remontstyle26.ru/',
    },
  },

  {
    image: lStudioPreviewImg,
    name: 'L’studio',
    labels: ['Салон красоты', 'интернет-магазин'],
    categories: [CASE_CATEGORIES.site],
    modal: {
      title: ['Сайт для салона красоты', '«L’Studio»'],
      description:
        'В рамках решения задачи был создан сайт для салона красоты в Батуми.',
      image: lStudioImg,
      siteHref: 'https://lstudiobatumi.com/',
    },
  },
  {
    image: usiPreviewImg,
    name: 'ЮгСтройИнвест',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
    modal: {
      title: ['Сайт для', 'ГК  «ЮгСтройИнвест»'],
      description:
        'Группа компаний «ЮгСтройИнвест» - лидирующий застройщик на Юге России. Строит в Ставрополе, Краснодаре и Ростове-на-Дону. ЮСИ возводит микрорайоны с домами комфорт — и бизнес-класса, с комплексным придомовым благоустройством и развитой инфраструктурой.',
      image: usiImg,
      siteHref: 'https://gk-usi.ru/',
    },
  },
  {
    image: tochkaVkusaPreviewImg,
    name: 'Точка вкуса',
    labels: ['Продуктовый магазин', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
    modal: {
      title: ['Брендинг для продуктового магазина', '«Точка вкуса»'],
      description:
        'Разработали нэйминг и логотип для продуктового магазина. Название «Точка вкуса» говорит само за себя. Логотип — лёгкий, изящный, подчёркивает тесную связь магазина с природой.',
      image: tochkaVkusaImg,
      siteHref: '',
    },
  },
  {
    image: siyaniePreviewImg,
    name: 'Сияние',
    labels: ['Жилой комплекс', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
    modal: {
      title: ['Сайт для жилого квартала', '«Сияние»'],
      description: '«Сияние» вызывает эмоции с первого взгляда.',
      image: siyanieImg,
      siteHref: 'https://kvartal-siyanie.ru/',
    },
  },
  {
    image: businessPreviewImg,
    name: 'Бизнес старт',
    labels: ['Бухгалтерские услуги', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
    modal: {
      title: ['Брендинг для компании бухгалтерских услуг', '«Бизнес старт»'],
      description:
        'Логотип представляет собой сборный образ из элементов, символизирующих специализацию компании — сферу бухгалтерских услуг и названия фирмы. Он легко запоминается и прост в использовании на разных носителях.',
      image: businessImg,
      siteHref: '',
    },
  },
  {
    image: comboPreviewImg,
    name: 'Combo',
    labels: ['Барбершоп', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
    modal: {
      title: ['', ''],
      description: '',
      image: comboImg,
      siteHref: '',
    },
  },
];

export const DEFAULT_MODAL_DATA = {
  title: ['', ''],
  description: '',
  image: null,
  siteHref: '',
};
