import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'

const Survey = () => {
    const [form, setForm] = useState({
        Name: '',
        WhatsApp: '',
        Email:'',
        Nota: 0
    })

    const Notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [ret, setRet] = useState({})

    const save = async () => {
        //alert('enviando os dados')
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
        setSucess(true)
        setRet(data)
        console.log(data)
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <PageTitle title='Survey' />
            <h1 className='text-center font-bold my-4 text-2xl'>Hints and opinions</h1>
            <p className='text-center mb-6'>
                Help us to improve our service.<br/>Share you opinion with us.
            </p>

            {!sucess && <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Name:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='Name' onChange={onChange} name='Name' value={form.Name}/>
                <label className='font-bold'>WhatsApp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='WhatsApp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
                <label className='font-bold'>Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='E-Mail' onChange={onChange} name='Email' value={form.Email}/>
                <label className='font-bold'>Evaluation:</label>
                <div className='flex py-6'>
                    { Notas.map(nota => {
                            return (
                                <label className='block w-1/6 text-center'>
                                    {nota}<br/>
                                    <input type='radio' key={nota} name='Nota' value={nota} onChange={onChange} /
                                ></label>
                            )
                        })
                    }
                </div>
                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Save</button>
            </div>}

            {sucess && <div className='w-1/5 mx-auto'>
                <p className='text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Thank you for everything</p>
                {
                    ret.showCupom && <div className='text-center border p-4 mb-4'>
                        Your cupom: <br/>
                        <span className='font-bold text-2xl'>{ret.Cupom}</span>
                    </div>
                }

{
                    ret.showCupom && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{ret.Promo}</span>
                        <br/>
                        <span className='italic'>Please, take a print or photo of this image and show it to the waiter.</span>
                    </div>
                }

            </div>}
        </div>
    )
}

export default Survey