import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_ID_SHEET,
  serviceAccountAuth,
)

export default async function getPromo(req, res) {
  try {
    await doc.loadInfo()
    const sheet1 = doc.sheetsByIndex[0]
    await sheet1.loadCells("A2:B2")
    const cellA2 = sheet1.getCell(1, 0)
    const cellB2 = sheet1.getCell(1, 1)

    res.end(
      JSON.stringify({
        showCoupon: cellA2.value === "Verdadeiro",
        message: cellB2.value,
      }),
    )
  } catch (error) {
    res.end(
      JSON.stringify({
        showCoupon: false,
        message: "mensagem",
      }),
    )
  }
}
