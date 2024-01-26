import React from "react"
import Link from "next/link"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {
  const { data, error } = useSWR("/api/get-promo", fetcher)

  return (
    <>
      <div>
        <h1>Inicio</h1>
      </div>
      <div>
        <Link href="/pesquisa">Pesquisa</Link>
      </div>
      <div>{!data ? <div>Carregando...</div> : null}</div>
      <div>{data && data.showCoupon ? <div>{data.message}</div> : null}</div>
    </>
  )
}

export default Home
