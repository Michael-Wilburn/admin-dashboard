import { SelectMenu} from 'evergreen-ui'
import { useState, useContext } from 'react'
import FilesUploader from '../filesUploader/FilesUploader'
import { useForm } from 'react-hook-form';
import FormContext from '../../context/formContext/formContext';
import { supabase } from '../../supabase/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function CarForm() {

    const {formData, setFormData, dataPrint} = useContext(FormContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        supabase
        .from('vehicules')
        .insert({ 
            id:uuidv4(),
            vehicule_type: data.typeOfCar,
            brand: data.brand,
            model: data.model,
            year: data.year,
            kilometers: data.kilometers,
            license_plate: data.licensePlate,
            price: data.price,
            info_price: data.infoPrice
        })
        .select()
        .then((r)=>{
            console.log(r);
            
    
        })
        .catch((e) => {
           
            console.log(e);
        });
        
    }


    return (
        <div className="card w-64 bg-base-100 shadow-xl place-content-center">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select className="select select-bordered join-item select-sm" {...register("typeOfCar", { required: true })}>
                <option disabled>Tipo de vehículo</option>
                <option value="HATCHBACK">HATCHBACK</option>
                <option value="MOTO">MOTO</option>
                <option value="PICK-UP">PICK-UP</option>
                <option value="SEDAN">SEDAN</option>
                <option value="SUV">SUV</option>
                <option value="VAN">VAN</option>
                </select>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" placeholder="Marca" {...register("brand", {required: true, maxLength: 50})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" placeholder="Modelo" {...register("model", {required: true, maxLength: 50})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="number" placeholder="Año" {...register("year", {required: true})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="number" placeholder="Kilometros" {...register("kilometers", {required: true})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" placeholder="Patente" {...register("licensePlate", {required: true})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="number" placeholder="Precio" {...register("price", {required: true})} />
                </div>
                <div className="container my-3">
                    <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="number" placeholder="Precio Info" {...register("infoPrice", {required: true})} />
                </div>
                <div className="container my-3">
                    <FilesUploader />
                </div>
                <div className="container my-3">
                <input className="btn btn-success" type="submit" value='Guardar' />
                </div>
            </form>
                
            {/* <form id="car-form" className="container">
            <div>
                <select 
                className="select select-bordered join-item select-sm" 
                name="typeOfCar" 
                value={selectedElement} // ...force the select's value to match the state variable...
                onChange={e => setSelectedElement(e.target.value)}
                required
                
                
                >
                    <option disabled>Tipo de vehículo</option>
                    <option value="HATCHBACK">HATCHBACK</option>
                    <option value="MOTO">MOTO</option>
                    <option value="PICK-UP">PICK-UP</option>
                    <option value="SEDAN">SEDAN</option>
                    <option value="SUV">SUV</option>
                    <option value="VAN">VAN</option>
                </select>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="brand"
                    placeholder="Marca" id="brand-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="model"
                    placeholder="Modelo" id="model-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="year"
                    placeholder="Año" id="year-car" required/>
            </div>
            <div>
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="kilometers"
                    placeholder="Kilometros" id="kilometers-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="licensePlate"
                    placeholder="Patente" id="licensePlate-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="price"
                    placeholder="Precio" id="price-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary input-sm w-full max-w-xs" type="text" name="infoPrice"
                    placeholder="Precio Info" id="infoPrice-car" required/>
            </div>
            <div className="container my-3"> */}
                {/* <input type="file" className="file-input w-full max-w-xs" /> */}
                {/* <FilesUploader /> */}
            {/* </div>
                <div className="card-actions">
                <button id="btn-car-safe" className="btn btn-success">Guardar</button>
            </div>
            </form>  */}
            </div>
        </div>
    )
  }