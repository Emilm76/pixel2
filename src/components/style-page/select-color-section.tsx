'use client';
import { ButtonPrimary } from '@/ui/button/button-primary';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './select-color-section.module.scss';

const colors = [
  '#31308E',
  '#2B3692',
  '#28409C',
  '#1F52A7',
  '#186DBE',
  '#0F84D1',
  '#069BDF',
  '#02A9DA',
  '#0AA94D',
  '#32B543',
  '#85CF34',
  '#C5E23A',
  '#EEED05',
  '#FFF001',
  '#FEDD04',
  '#FDCA21',
  '#F79010',
  '#F57616',
  '#F3661F',
  '#F2581A',
  '#EA202C',
  '#EE223B',
  '#ED1B4F',
  '#EC145D',
  '#F02F8C',
  '#E55D9F',
  '#DF8FB6',
  '#D7BFCB',
  '#D7D8D2',
  '#8E8F91',
  '#050A0D',
  '#FFFFFF',
];

export function SelectColorSection() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <section className="section-pt-2">
      <div className="container h-pb">
        <div className={styles.header}>
          <h2 className="h2">
            Выберите <span className="purple">цвет</span>
          </h2>
          <ButtonPrimary className={styles.button} text="Выбрать из палитры" />
        </div>
      </div>

      <div className={clsx(styles.colorsContainer, 'container')}>
        {colors.map((color, index) => {
          return (
            <div
              className={clsx(
                styles.colorItem,
                selectedColor === color && styles.selected
              )}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              key={index}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
