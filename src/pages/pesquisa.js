import React from "react"
import Link from "next/link"
import useSWR from "swr"

function Pesquisa() {
  const save = async () => {
    const form = {
      Nome: "aaaa",
      Email: "aaaa",
      Whatsapp: "aaaa",
    }
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div>
        <h1>Pesquisa</h1>
      </div>
      <div>
        <Link href="/">Inicio</Link>
      </div>
      <div>
        Nome:
        <input type="text" value="" />
        <button type="button" onClick={save}>
          Enviar
        </button>
      </div>
    </>
  )
}

export default Pesquisa
