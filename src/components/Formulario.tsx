// import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    name: string;
    age: number;
}

export const Formulario = () => {

    const {name, email, age, formulario, handleChange } = useForm<FormData>({
        email: 'jies1702@gmail.com',
        name: 'jimo',
        age: 35
    });

    // const {email, name, age} = formulario;

    /*  const [formulario, setFormulario] = useState({
        email: '',
        name: ''
    });

    const handleChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    } */

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email: </label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={email} 
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name: </label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Age: </label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="age"
                    value={age}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>     
    )
}

