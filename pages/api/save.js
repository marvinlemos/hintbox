import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('15lrLBjRMyZ831E_uHaycLSOun3bLIrVjb0GjKS4CW50')

export default async(req, res) => {
    try{
        console.log(JSON.parse(req.body))
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]

        const data = JSON.parse(req.body)

        await sheet.addRow({
            Name: data.Name,
            Email: data.Email,
            Whatsapp: '55 86 99999-0001',
            Cupom: '1111',
            Promo: 'ABC'
        })

        res.end(req.body)
    }catch(error){
        console.log('error')
        res.end('error')
    }
}