import {useContext} from 'react'

import {CustomerContext} from '../context/customers.context';


function CustomerList(){
        let {customers, } = useContext(CustomerContext);

    return(<div>Customer List Length: { customers } </div>)
}

export default CustomerList