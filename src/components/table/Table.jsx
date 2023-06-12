import { Button, EditIcon,TrashIcon,DownloadIcon, Icon, AddColumnLeftIcon, ChevronRightIcon  } from 'evergreen-ui'


export default function Table(){
    
    return(
        <div className="overflow-x-auto">

        <table className="table table-sm text-center">
            <thead>
            <tr>
                <th className="cursor-point"><label className="btn drawer-button" htmlFor="my-drawer"><Icon icon={ChevronRightIcon} size={24}/></label></th>
                <th>n </th> 
                <th>WEB</th> 
                <th>Marketplace</th> 
                <th>Tipo de Vehiculo</th> 
                <th>Marca</th> 
                <th>Modelo</th> 
                <th>Año</th>
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
            <tr>
                <th></th>
                <th>1</th> 
                <td className="place-content-center">
                    <input type="checkbox" className="checkbox checkbox-success checkbox-sm" />
                </td> 
                <td className="place-content-center">
                    <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />
                </td> 
                <td>SUV</td> 
                <td>AUDI</td> 
                <td>Q5 2.0T 225HP STRONIC</td> 
                <td>2013</td>
                <td>101.000</td>
                <td>MBB885</td>
                <td>USD 29.000</td>
                <td>$15.000.000</td>
                <td><Icon icon={DownloadIcon} size={24}/></td>
                <td><Button marginY={8} marginRight={12} iconBefore={EditIcon}>Editar</Button></td>
                <td><Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">Eliminar...</Button></td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}