import React from 'react'
import Link from 'next/link'
import styles from 'styles/TopBar.module.sass'

class TopBar extends React.Component {
  render(){
    return (
      <header className={styles.navBar}>
        <nav prefetch="true">
          <ul>
            <Link href="/">
              <a>
                <li>LOGO/Title</li>
              </a>
            </Link>
          </ul>
          <Link href="/login">
            <a style={{right:"10px",position:"absolute"}}>
              Login
            </a>
          </Link>
        </nav>
      </header>
    )
  }
}

export default TopBar
