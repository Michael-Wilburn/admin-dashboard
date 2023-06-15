import { Button, EditIcon,TrashIcon,DownloadIcon, Icon, AddColumnLeftIcon, ChevronRightIcon  } from 'evergreen-ui'
import { supabase } from '../../supabase/supabaseClient';
import { useContext, useEffect, useState} from 'react';
import CarsDataContext from '../../context/carsDataContext/CarsDataContext';

export default function Table(){

    const {data,getResponse, isLoaded, check, setCheck, orderByYear} = useContext(CarsDataContext);

    const[chekedUpdating, setChekedUpdating] = useState(false)
    
    useEffect(()=>{
        // getResponse();
        orderByYear();
    },[chekedUpdating])

    const handleChangeweb = async(event) => {        
    const { error } = await supabase.from('vehicules')
    .update({ web: event.target.checked })
    .eq('id',event.target.accessKey)

    if(error){
        console.log(error)
    } else {
        console.log(check.filter(car => car.id === event.target.accessKey)[0])
        const item = check.filter(car => car.id === event.target.accessKey)[0];
        const indexItem = check.indexOf(item);
        const updatArr = [];
        for(let i=0; i< check.length; i++){
            if(i != indexItem){
                updatArr.push(check[i])
            } else {
                let obj = {
                    id:check[i].id, 
                    web:event.target.checked,
                    marketplace:check[i].marketplace
                }
                updatArr.push(obj)
            }
        }
        console.log(updatArr)
        setCheck[updatArr];
        if(chekedUpdating){
            setChekedUpdating(false);
        } else {
            setChekedUpdating(true);
        }
    }

    
      // 👇️ this is the checkbox itself
    //   console.log(event.target.accessKey);
    //   console.log(event.target.checked);
    };


    const handleChangemarketplace = event => {
        //   setIsChecked(event.target.checked);
      
          // 👇️ this is the checkbox itself
          console.log(event);
        
          // 👇️ this is the checked value of the field
          console.log(event.target.checked);
        };

    return(
        <div className="overflow-x-auto">
        <table className="table table-sm text-center">
            <thead>
            <tr>
                <th className="cursor-point"><label className="btn drawer-button" htmlFor="my-drawer"><Icon icon={ChevronRightIcon} size={24}/></label></th>
                <th>Fichero</th> 
                <th>WEB</th> 
                <th>Marketplace</th> 
                <th>Tipo de Vehiculo</th> 
                <th>Marca</th> 
                <th>Modelo</th> 
                <th accessKey='year' onClick={()=>console.log(event.target.accessKey)}>Año</th>
                <th>Kilometros</th>
                <th>Patente</th>
                <th>Precio</th>
                <th>Precio Info	</th>
                <th>Descargar</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            {!isLoaded && <tr><th>loading...</th></tr>}
            {isLoaded && data.map(car => 
            <tr key={car.id}>
                <th></th>
                <th>{car.file_number}</th> 
                <td className="place-content-center">
                    <input 
                    type="checkbox" 
                    onChange={handleChangeweb} 
                    accessKey={car.id} 
                    checked={check[check.indexOf(check.filter(item => item.id === car.id)[0])].web}
                    className="checkbox checkbox-success checkbox-sm" 
                    />

                </td> 
                <td className="place-content-center">
                    <input type="checkbox" onChange={handleChangeweb} accessKey={car.id} className="checkbox checkbox-info checkbox-sm" />
                </td> 
                <td>{car.vehicule_type}</td> 
                <td>{car.brand}</td> 
                <td>{car.model}</td> 
                <td>{car.year}</td>
                <td>{car.kilometers}</td>
                <td>{car.license_plate}</td>
                <td>{car.price}</td>
                <td>{car.info_price}</td>
                <td><Icon icon={DownloadIcon} size={24}/></td>
                <td><Button marginY={8} marginRight={12} iconBefore={EditIcon}>Editar</Button></td>
                <td><Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">Eliminar...</Button></td>
            </tr>
            )}
            </tbody>
        </table>
        </div>
    )
}