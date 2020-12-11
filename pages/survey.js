import React, {useState} from 'react'
import Link from 'next/link'


const Survey = () => {
    const [form, setForm] = useState({
        Name: '',
        WhatsApp: '',
        Email:''
    })
    const save = async () => {
        //alert('enviando os dados')
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })

        const data = await response.json()
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
            <h1 className='text-center font-bold my-4 text-2xl'>Hints and opinions</h1>
            <p className='text-center mb-6'>
                Help us to improve our service.<br/>Share you opinion with us.
            </p>

            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Name:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='Name' onChange={onChange} name='Name' value={form.Name}/>
                <label className='font-bold'>WhatsApp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='WhatsApp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
                <label className='font-bold'>Email:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded w-5/6' placeholder='E-Mail' onChange={onChange} name='Email' value={form.Email}/>
                <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Save</button>
            </div>
        </div>
    )
}

export default Survey