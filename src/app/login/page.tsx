"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();

        alert("Usuario correcto");
        setUser({
          email: "",
          password: "",
        });
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      error instanceof Error && alert(`Se produjo un error: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inicia sesión</h1>
      <p className={styles.info}>Inicia sesión con tu usuario y contraseña</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.label}>
          Correo electrónico:
          <input
            type="text"
            name="email"
            className={styles.input}
            onChange={handleChange}
            value={user.email}
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          Contraseña:
          <input
            type="password"
            name="password"
            className={styles.input}
            onChange={handleChange}
            value={user.password}
          />
        </label>
        <button type="submit" className={styles.button}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
