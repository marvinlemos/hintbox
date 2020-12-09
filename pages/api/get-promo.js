import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('15lrLBjRMyZ831E_uHaycLSOun3bLIrVjb0GjKS4CW50')
export default async(req, res) => {

    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')

        const showPromotion = sheet.getCell(2,0)
        const message = sheet.getCell(2,1)

        res.end(JSON.stringify({
            showCoupon: showPromotion.value,
            message: message.value
        }))
    }catch(err){
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}