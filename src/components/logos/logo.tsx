import { AgisIcon } from '@/images/logos/agis';
import { AtmosphereIcon } from '@/images/logos/atmosphere';
import { BrainiIcon } from '@/images/logos/braini';
import { FeliniIcon } from '@/images/logos/felini';
// import { KonkritIcon } from '@/images/logos/konkrit';
import KonkritImg from '@/images/logos/konkrit.jpg';
import { MaycopeVillageIcon } from '@/images/logos/maycope-village';
import { MonavieIcon } from '@/images/logos/monavie';
import { VershiniIcon } from '@/images/logos/vershini';
import styles from './logo.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

export const logos = [
  AgisLogo,
  MaycopeVillageLogo,
  MonavieLogo,
  KonkritLogo,
  VershiniLogo,
  AtmosphereLogo,
  FeliniLogo,
  BrainiLogo,
];

function AgisLogo() {
  return (
    <div className={clsx(styles.logo, styles.agis)}>
      <AgisIcon />
    </div>
  );
}

function MaycopeVillageLogo() {
  return (
    <div className={clsx(styles.logo, styles.maycope)}>
      <MaycopeVillageIcon />
    </div>
  );
}

function AtmosphereLogo() {
  return (
    <div className={clsx(styles.logo, styles.atmosphere)}>
      <AtmosphereIcon />
    </div>
  );
}

function MonavieLogo() {
  return (
    <div className={clsx(styles.logo, styles.monavie)}>
      <MonavieIcon />
    </div>
  );
}

function KonkritLogo() {
  return (
    <Image
      className={clsx(styles.logo, styles.konkrit)}
      src={KonkritImg}
      alt="логотип Конкрит"
    />
    // <div className={clsx(styles.logo, styles.konkrit)}>
    //   <KonkritIcon />
    // </div>
  );
}

function VershiniLogo() {
  return (
    <div className={clsx(styles.logo, styles.vershini)}>
      <VershiniIcon />
    </div>
  );
}

function FeliniLogo() {
  return (
    <div className={clsx(styles.logo, styles.felini)}>
      <FeliniIcon />
    </div>
  );
}

function BrainiLogo() {
  return (
    <div className={clsx(styles.logo, styles.braini)}>
      <BrainiIcon />
    </div>
  );
}
