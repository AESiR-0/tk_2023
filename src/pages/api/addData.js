import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
]

export default async function handler(req, res) {
    if(req.method !== 'POST') return res.status(405).json({ response: 'Method not allowed' })
    if(!req.body.name || !req.body.number) return res.status(400).json({ response: 'Bad request' })
    const jwt = new JWT({
        email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
        scopes: SCOPES,
    });
    const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SHEET_ID, jwt);
    try {
        await doc.loadInfo()
        if(req.body.lead == 'landing'){
        const sheet = doc.sheetsByIndex[1];
        await sheet.addRow({Name: req.body.name, Number: req.body.number, Age:req.body.age, Gender: req.body.gender, Course: req.body.course });
        
        res.json({ response: sheet })}
        else if(req.body.lead == 'footer'){
            const sheet = doc.sheetsByIndex[2];
            await sheet.addRow({Name: req.body.name, Number: req.body.number, Course : req.body.course});
            res.json({ response: sheet })
        }
        else if(req.body.lead == 'course'){
            const sheet = doc.sheetsByIndex[0];
            await sheet.addRow({Name: req.body.name, Number: req.body.number,Course : req.body.course});
            res.json({ response: sheet })}
        
    } catch (error) {
        res.json({ response: error })
    }
}