import React , {useState  } from 'react'
import MaterialTable from 'material-table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'





function Home() {
  const [show, setShow] = useState(false);
  const[activityTime , setActivityTime] = useState('');
  
    const handleClose = () => setShow(false);
    

    var data = require('./TestJSON.json');
    
    
    

   function  onRowClickHandle(event, rowData) {

      setShow(true)
      console.log("............")
      console.log(rowData);
      var list = rowData.activity_periods.map( (element) =>{

      return  <li>{element.start_time}   -   {element.end_time}</li>


      })
      setActivityTime(list);
    }
   
    

  
    return (
      <>
       
        <MaterialTable
      icons={{ Filter: () => <div /> }}
      title="UserDetails"
      columns={[ 
        { title: 'id', field: 'id' },
        { title: 'real_name', field: 'real_name' },
        
        { title: 'tz', field: 'tz' },
        
      ]}

      data={data.members}
      options={{
        filtering: false,
        exportButton: true ,
        exportAllData : true ,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        }


      }}
       onRowClick={(event, rowData) => { 
        onRowClickHandle(event, rowData)

        }} 
      
    /> 


<Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Activity Period</Modal.Title>
            
          </Modal.Header>

      <Modal.Body><ul>{activityTime}</ul></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Home;