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

export default async function save(req, res) {
  try {
    await doc.loadInfo()
    const sheet1 = doc.sheetsByIndex[0]
    await sheet1.loadCells("A2:B2")
    const cellA2 = sheet1.getCell(1, 0)

    const data = JSON.parse(req.body)

    if (cellA2.value === "Verdadeiro") {
      const sheet = doc.sheetsByIndex[1]
      const date = new Date()

      await sheet.addRow({
        Data: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        Mensagem: data,
      })

      res.end(req.body).status(200)
    }
  } catch (error) {
    res.end("Erro")
  }
}
