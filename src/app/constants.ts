import businessImg from '@/images/cases/business.jpg';
import comboImg from '@/images/cases/combo.jpg';
import lStudioImg from '@/images/cases/l-studio.jpg';
import remontStyleImg from '@/images/cases/remont-style.jpg';
import siyanieImg from '@/images/cases/siyanie.jpg';
import tochkaVkusaImg from '@/images/cases/tochka-vkusa.jpg';
import traceImg from '@/images/cases/trace.jpg';
import usiImg from '@/images/cases/usi.jpg';

const CASE_CATEGORIES = {
  site: 'site',
  branding: 'branding',
};

export const CASES = [
  {
    id: 1,
    image: lStudioImg,
    name: 'L’studio',
    labels: ['Салон красоты', 'интернет-магазин'],
    categories: [CASE_CATEGORIES.site],
  },
  {
    id: 2,
    image: usiImg,
    name: 'ЮгСтройИнвест',
    labels: ['застройщик', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
  },
  {
    id: 3,
    image: traceImg,
    name: 'Trace',
    labels: ['Семейная винодельня', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
  },
  {
    id: 4,
    image: tochkaVkusaImg,
    name: 'Точка вкуса',
    labels: ['Продуктовый магазин', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
  },
  {
    id: 5,
    image: siyanieImg,
    name: 'Сияние',
    labels: ['Жилой комплекс', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
  },
  {
    id: 6,
    image: remontStyleImg,
    name: 'РемонтStyle',
    labels: ['Строительная компания', 'многостраничный сайт'],
    categories: [CASE_CATEGORIES.site],
  },
  {
    id: 7,
    image: businessImg,
    name: 'Бизнес старт',
    labels: ['Бухгалтерские услуги', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
  },
  {
    id: 8,
    image: comboImg,
    name: 'Combo',
    labels: ['Барбершоп', 'брендинг'],
    categories: [CASE_CATEGORIES.site, CASE_CATEGORIES.branding],
  },
];
