import businessPreviewImg from '@/images/cases-preview/business.jpg';
import comboPreviewImg from '@/images/cases-preview/combo.jpg';
import druzbaPreviewImg from '@/images/cases-preview/druzhba.jpg';
import hermitagePreviewImg from '@/images/cases-preview/hermitage.jpg';
import lStudioPreviewImg from '@/images/cases-preview/l-studio.jpg';
import monaviPreviewImg from '@/images/cases-preview/monavi.jpg';
import norledPreviewImg from '@/images/cases-preview/norled.jpg';
import pechorinPreviewImg from '@/images/cases-preview/pechorin.jpg';
import remontStylePreviewImg from '@/images/cases-preview/remont-style.jpg';
import siyaniePreviewImg from '@/images/cases-preview/siyanie.jpg';
import smartpoletPreviewImg from '@/images/cases-preview/smartpolet.jpg';
import tochkaVkusaPreviewImg from '@/images/cases-preview/tochka-vkusa.jpg';
import tracePreviewImg from '@/images/cases-preview/trace.jpg';
import usiPreviewImg from '@/images/cases-preview/usi.jpg';
import visotaPreviewImg from '@/images/cases-preview/visota.jpg';

import businessImg from '@/images/cases/business-start.jpg';
import comboImg from '@/images/cases/combo.jpg';
import usiImg from '@/images/cases/gk-usi.jpg';
import hermitageImg from '@/images/cases/hermitage.jpg';
import lStudioImg from '@/images/cases/l-studio.jpg';
import norledImg from '@/images/cases/norled.jpg';
import remontStyleImg from '@/images/cases/remont-style.jpg';
import siyanieImg from '@/images/cases/siyanie.jpg';
import tochkaVkusaImg from '@/images/cases/tochka-vkusa.jpg';
import traceImg from '@/images/cases/trace.jpg';
// import ugStroysoftImg from '@/images/cases/ug-stroysoft.jpg';
import druzbaImg from '@/images/cases/druzhba.jpg';
import monaviImg from '@/images/cases/monavi.jpg';
import pechorinImg from '@/images/cases/pechorin.jpg';
import smartpoletImg from '@/images/cases/smartpolet.jpg';
import visotaImg from '@/images/cases/visota.jpg';
import { StaticImageData } from 'next/image';

export type Filter = 'all' | 'web' | 'branding' | 'app' | 'design';

export const FILTERS: { label: string; value: Filter }[] = [
  { label: 'Все', value: 'all' },
  { label: 'Сайты', value: 'web' },
  { label: 'Брендинг', value: 'branding' },
  //{ label: 'Приложения', value: 'app' },
  //{ label: 'Графический дизайн', value: 'design' },
];

export type Case = {
  image: StaticImageData;
  name: string;
  labels: string[];
  categories: Filter[];
  modal: CaseModalData;
};

export type CaseModalData = {
  title: string[];
  description: string;
  image: StaticImageData | null;
  siteHref: string | null;
};

export const HERMITAGE_CASE_MODAL: CaseModalData = {
  title: ['Первый культурный квартал', '«Эрмитаж»'],
  description:
    'Современный, сдержанный, впечатляющий — это все про сайт, разработанный нашей командой.',
  image: hermitageImg,
  siteHref: 'https://kvartal-hermitage.ru/',
};

export const CASES: Case[] = [
  {
    image: monaviPreviewImg,
    name: 'Monavie',
    labels: ['Коттеджный поселок', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для коттеджного поселка', '«Monavie»'],
      description: '',
      image: monaviImg,
      siteHref: null,
    },
  },
  {
    image: hermitagePreviewImg,
    name: 'Эрмитаж',
    labels: ['культурный квартал', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Первый культурный квартал', '«Эрмитаж»'],
      description:
        'Современный, сдержанный, впечатляющий — это все про сайт, разработанный нашей командой.',
      image: hermitageImg,
      siteHref: 'https://kvartal-hermitage.ru/',
    },
  },
  {
    image: norledPreviewImg,
    name: 'Norled',
    labels: ['многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт для компании', '«NORLED»'],
      description:
        'Создали сайт для производителя, специализирующегося на производстве светодиодного оборудования, программного обеспечения и объектов инфраструктуры умных городов.',
      image: norledImg,
      siteHref: 'https://norled.ru/',
    },
  },
  {
    image: tracePreviewImg,
    name: 'Trace',
    labels: ['Семейная винодельня', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для семейной винодельни', '«Trace»'],
      description:
        'Разработали логотип и нэйминг для небольшой семейной винодельни. Это авторский продукт, каждую бутылку вина владельцы компании изготовливают самостоятельно, и в этом его особенность, которую мы решили подчеркнуть. Название – «Trace», выбрано не случайно, в переводе означает «След». В логотипе использовали специальные элементы: это отпечаток пальца, а также подпись владельца и уникальная маркировка, которые заполняются на этикетке вручную.',
      image: traceImg,
      siteHref: null,
    },
  },
  {
    image: remontStylePreviewImg,
    name: 'РемонтStyle',
    labels: ['Строительная компания', 'многостраничный сайт'],
    categories: ['web'],
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
    categories: ['web'],
    modal: {
      title: ['Сайт для салона красоты', '«L’Studio»'],
      description:
        'В рамках решения задачи был создан сайт для салона красоты в Батуми.',
      image: lStudioImg,
      siteHref: 'https://lstudiobatumi.com/',
    },
  },
  {
    image: tochkaVkusaPreviewImg,
    name: 'Точка вкуса',
    labels: ['Продуктовый магазин', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для продуктового магазина', '«Точка вкуса»'],
      description:
        'Разработали нэйминг и логотип для продуктового магазина. Название «Точка вкуса» говорит само за себя. логотип — лёгкий, изящный, подчёркивает тесную связь магазина с природой.',
      image: tochkaVkusaImg,
      siteHref: null,
    },
  },
  {
    image: pechorinPreviewImg,
    name: 'Печорин',
    labels: ['Клубный квартал', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Клубный квартал', '«Печорин»'],
      description:
        'Разработали функциональный и удобный в использовании многостраничный сайт, адаптивный под все носители.',
      image: pechorinImg,
      siteHref: 'https://kvartal-pechorin.ru/',
    },
  },
  {
    image: smartpoletPreviewImg,
    name: 'smartpolét',
    labels: ['Умный квартал', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт для умного квартала', '«smartpolét»'],
      description:
        'Создали качественный, информативный, многостраничный сайт для жилого комплекса с интерактивным поиском квартир.',
      image: smartpoletImg,
      siteHref: 'https://poletsmart.ru/',
    },
  },
  {
    image: businessPreviewImg,
    name: 'Бизнес старт',
    labels: ['Бухгалтерские услуги', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для компании бухгалтерских услуг', '«Бизнес старт»'],
      description:
        'логотип представляет собой сборный образ из элементов, символизирующих специализацию компании — сферу бухгалтерских услуг и названия фирмы. Он легко запоминается и прост в использовании на разных носителях.',
      image: businessImg,
      siteHref: null,
    },
  },
  {
    image: siyaniePreviewImg,
    name: 'Сияние',
    labels: ['Жилой комплекс', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт для жилого квартала', '«Сияние»'],
      description: '«Сияние» вызывает эмоции с первого взгляда.',
      image: siyanieImg,
      siteHref: 'https://kvartal-siyanie.ru/',
    },
  },
  {
    image: comboPreviewImg,
    name: 'Combo',
    labels: ['Барбершоп', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для барбершопа', '«Combo»'],
      description:
        'В то время, когда все используют современные элементы, мы решили пойти от обратного и вернуться к истокам. В основу логотипа для барбершопа «Combo» был взят классический американский стиль.',
      image: comboImg,
      siteHref: null,
    },
  },
  {
    image: usiPreviewImg,
    name: 'ЮгСтройИнвест',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт для', 'ГК  «ЮгСтройИнвест»'],
      description:
        'Группа компаний «ЮгСтройИнвест» - лидирующий застройщик на Юге России. Строит в Ставрополе, Краснодаре и Ростове-на-Дону. ЮСИ возводит микрорайоны с домами комфорт — и бизнес-класса, с комплексным придомовым благоустройством и развитой инфраструктурой.',
      image: usiImg,
      siteHref: 'https://gk-usi.ru/',
    },
  },

  // TODO: не работают ссылки
  /*{
    image: usiPreviewImg,
    name: 'ДомМаркет',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['САЙТ', '«ДомМаркет»'],
      description:
        'Разработали лендинг с каталогом домов, возможностью скачать планировку и оставить контакты в форме обратной связи.',
      image: usiImg,
      siteHref: 'https://dommarket.info/',
    },
  },*/
  /*{
    image: usiPreviewImg,
    name: 'Юг-Стройфорт',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт для ГК', '«Юг-Стройфорт»'],
      description:
        'Группа компаний нового поколения «Юг-Стройфорт» занимается возведением жилой и коммерческой недвижимости по самым современным технологиям.',
      image: ugStroysoftImg,
      siteHref: 'https://ug-stroyfort.ru/',
    },
  },*/

  {
    image: visotaPreviewImg,
    name: 'Высота',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: ['web'],
    modal: {
      title: ['Сайт жилого комплекса', '«Высота»'],
      description:
        'Разработали многостраничный сайт для нового жилого комплекса «Высота» в Ставрополе от надёжного застройщика группы компаний «ЮгСтройИнвест»',
      image: visotaImg,
      siteHref: 'https://kvartal-visota.ru/',
    },
  },
  {
    image: druzbaPreviewImg,
    name: 'Дружба',
    labels: ['застройщик', 'брендинг'],
    categories: ['branding'],
    modal: {
      title: ['Брендинг для жилого комплекса', '«Дружба»'],
      description:
        'При выборе символа мы сделали акцент на единство, дом и корабль имеют намного больше общего, чем может показаться на первый взгляд',
      image: druzbaImg,
      siteHref: null,
    },
  },
];

export const DEFAULT_MODAL_DATA = {
  title: ['', ''],
  description: '',
  image: null,
  siteHref: null,
};
