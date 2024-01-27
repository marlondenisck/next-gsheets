import React, { useState } from "react"
import Link from "next/link"

function Pesquisa() {
  const [mensagem, setMensagem] = useState("")

  const save = async () => {
    try {
      await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(mensagem),
      })
      setMensagem("")
      alert("Mensagem enviada com sucesso!")
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
        Mensagem:
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button type="button" onClick={save}>
          Enviar
        </button>
      </div>
    </>
  )
}

export default Pesquisa
