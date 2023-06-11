import { SelectMenu} from 'evergreen-ui'
import { useState } from 'react'

export default function CarForm() {
    const [selected, setSelected] = useState(null)
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl place-content-center">
            <div className="card-body">
            <form id="car-form" className="form-car">
            <div>
                <select className="select select-bordered join-item" name="type" id="type-car"
                    placeholder="Tipo de vehículo" required>
                    <option disabled>Tipo de vehículo</option>
                    <option value="HATCHBACK">HATCHBACK</option>
                    <option value="MOTO">MOTO</option>
                    <option value="PICK-UP">PICK-UP</option>
                    <option value="SEDAN">SEDAN</option>
                    <option value="SUV">SUV</option>
                    <option value="VAN">VAN</option>
                </select>
                {/* <SelectMenu
                    title="Tipo de vehículo"
                    options={['HATCHBACK', 'MOTO', 'PICK-UP', 'SEDAN', 'SUV','VAN'].map((label) => ({ label, value: label }))}
                    hasFilter={false}
                    hasTitle={false}
                    selected={selected}
                    onSelect={(item) => setSelected(item.value)}
                >
                    <button>{selected || 'Tipo de Vehículo...'}</button>
                </SelectMenu> */}
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="brand"
                    placeholder="Marca" id="brand-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="model"
                    placeholder="Modelo" id="model-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="year"
                    placeholder="Año" id="year-car" required/>
            </div>
            <div>
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="kilometers"
                    placeholder="Kilometros" id="kilometers-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="licensePlate"
                    placeholder="Patente" id="licensePlate-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="price"
                    placeholder="Precio" id="price-car" required/>
            </div>
            <div className="container my-3">
                <input className="input input-bordered input-primary w-full max-w-xs" type="text" name="infoPrice"
                    placeholder="Precio Info" id="infoPrice-car" required/>
            </div>
            <div className="container my-3">
                <input type="file" className="file-input w-full max-w-xs" />
            </div>
                <div className="card-actions">
                <button id="btn-car-safe" className="btn btn-success">Guardar</button>
                <button id="btn-pdf" className="btn btn-primary">Crear PDF</button>
            </div>
                <p className="cars-amount">Vehículos: <span id="amountCars"></span></p>
            </form> 
            </div>
        </div>
    )
  }