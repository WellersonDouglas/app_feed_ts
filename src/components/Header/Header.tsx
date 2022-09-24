import styles from './Header.module.css'

import igniteLogo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="LogoTipo do Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
