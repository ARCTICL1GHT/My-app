import { useForm } from 'react-hook-form';

import React from 'react';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data: any) {
    console.log(data);
    alert('Formulario enviado');
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="email"
        {...register('email', {
          required: 'required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Los valores no existen',
          },
        })}
        type="email"
      />
      <input
        id="contraseña"
        {...register('contraseña', {
          required: 'required',
          minLength: {
            value: 5,
            message: 'Debe ser mayor a 5 caracteres',
          },
        })}
        type="password"
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="button" onClick={() => console.log(errors)}>
        mostrar errores
      </button>
      <button type="submit">Enviar formulario</button>
    </form>
  );
}
