import {useContext} from 'react'

import {CustomerContext} from '../context/customers.context';


function CustomerList(){
        let {custList, } = useContext(CustomerContext);

    return(<div>Customer List Length: { custList.theList.length } </div>)
}

export default CustomerList