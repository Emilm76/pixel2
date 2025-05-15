'use-client';
import { ButtonPrimary } from '@/ui/button/button-primary';
import { Checkbox } from '@/ui/checkbox/checkbox';
import { TelField } from '@/ui/field/tel-field';
import { TextField } from '@/ui/field/text-field';
import styles from './form.module.scss';

export function Form({ variant = 'sm' }: { variant?: 'md' | 'sm' }) {
  /*function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }*/

  return (
    <form
      method="post"
      // onSubmit={handleSubmit}
    >
      {variant === 'md' && (
        <TextField
          className={styles.input}
          inputProps={{
            type: 'text',
            name: 'user-name',
            placeholder: 'Ваше имя',
            autoComplete: 'off',
            required: true,
          }}
        />
      )}
      <TelField
        className={styles.input}
        inputProps={{
          type: 'text',
          name: 'user-tel',
          placeholder: 'Телефон',
          autoComplete: 'off',
          required: true,
        }}
      />

      <ButtonPrimary className={styles.button} type="submit" text="Отправить" />

      <Checkbox
        className={styles.checkbox}
        inputProps={{ name: 'agree', required: true }}
      />
    </form>
  );
}
