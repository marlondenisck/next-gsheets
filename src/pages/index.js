import React from "react"
import Link from "next/link"

function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <Link href='/sobre'>Sobre</Link>
      </div>
    </>
  )
}

export default Home
