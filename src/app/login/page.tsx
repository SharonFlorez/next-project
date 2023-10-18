import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inicia sesión</h1>
      <p className={styles.info}>Inicia sesión con tu usuario y contraseña</p>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Correo electrónico:
          <input type="text" name="email" className={styles.input} />
        </label>
        <label htmlFor="password" className={styles.label}>
          Contraseña:
          <input type="password" name="password" className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
