import React, { FC } from "react"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Home:FC = ():JSX.Element => {
  return (
    <div>
      <h1 className={styles.unique}>Hello, world!</h1>
      <p>This is the text I need you to type.</p>
        <input type="text"></input>
        <p id="status"></p>
      <p>
        Check out <Link href="/foo">foo</Link>.
      </p>
    </div>
  )
}

export default Home;