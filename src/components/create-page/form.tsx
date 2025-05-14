'use-client';
import { ButtonPrimary } from '@/ui/button/button-primary';
import { TextField } from '@/ui/field/text-field';
import styles from './form.module.scss';

export function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.inputWrapper}>
        <TextField
          className={styles.input}
          inputProps={{
            type: 'text',
            name: 'company-name',
            placeholder: 'Название компании',
            autoComplete: 'off',
            required: true,
          }}
        />
        <p className={styles.label}>(будет использоваться в логотипе)</p>
      </div>

      <div className={styles.inputWrapper}>
        <TextField
          inputProps={{
            type: 'text',
            name: 'company-description',
            placeholder: 'Описание',
            autoComplete: 'off',
            required: true,
          }}
        />
        <p className={styles.label}>
          (будет в качестве дескриптера под логотипом)
        </p>
      </div>

      <ButtonPrimary
        href="/logo-builder/style"
        className={styles.button}
        text="Сгенерировать логотип"
      />
    </div>
  );
}
