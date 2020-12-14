import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('15lrLBjRMyZ831E_uHaycLSOun3bLIrVjb0GjKS4CW50')

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {
    try{
        console.log(JSON.parse(req.body))
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[1]

        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')

        const showPromotionCell = sheetConfig.getCell(2,0)
        const messageCell = sheetConfig.getCell(2,1)

        let Cupom = ''
        let Promo = ''

        if (showPromotionCell.value){
            Cupom = genCupom(),
            Promo = messageCell.value
        }

        await sheet.addRow({
            Name: data.Name,
            Email: data.Email,
            WhatsApp: data.WhatsApp,
            Evaluation: parseInt(data.Nota),
            'Date': moment().format('DD/MM/YYYY, HH:mm:ss'),
            Cupom, //Assign the value of the variable with the same name
            Promo
        })

        res.end(JSON.stringify({
            showCupom: Cupom !== '',
            Cupom,
            Promo
        }))
    }catch(error){
        console.log('error: ' + error)
        res.end('error')
    }
}