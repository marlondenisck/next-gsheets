export default async function getPromo(req, res) {
  res.end(
    JSON.stringify({
      showCoupon: true,
      message: "mensagem",
    }),
  )
}
