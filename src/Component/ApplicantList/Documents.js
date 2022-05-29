// import React, { useEffect, useState } from "react";
// import { Input, Table } from "reactstrap";
// import fakeData from "../../FakeData/DocumentList";
// const Documents = () => {
//   const [documents, setDocuments] = useState({ documentList: []});
//   const [selectedDocuments, setSelectedDocuments] = useState([]);

//   useEffect(() => {
//     setDocuments({ documentList: fakeData });
//   }, [selectedDocuments]);

//   const handleCheck = (select) => {
//     setSelectedDocuments([...selectedDocuments, select]);
//   };

//   return (
//     <div>
//       <Table hover borderless className="border">
//         <thead>
//           <tr>
//             <th>Documents</th>
//             <th>Submit</th>
//           </tr>
//         </thead>
//         <tbody>
//           {documents.documentList.map((document) => (
//             <tr>
//               <th scope="row">{document}</th>
//               <td>
//                 <Input type="checkbox" id={document} onChange={()=> handleCheck(document)} />
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <th>Remaining Documents Will Be Submit In : </th>
//             <td>
//               <Input
//                 required
//                 id="exampleDate"
//                 name="date"
//                 placeholder="date placeholder"
//                 type="date"
//               />
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//       {    console.log(selectedDocuments)}
//     </div>
//   );









  // const [selectedDocuments,setSelectedDocuments] = useState([]);
  // const [metric,setMetric]=useState(false);
  // const [inter,setInter]=useState(false);
  // const [testimonial,setTestimonial]=useState(false);

  // const handleCheck = (type) => {
  //   if(type === 'mtr'){
  //     setMetric(!metric)
  //     if(metric){
  //       setSelectedDocuments([...selectedDocuments, type]);
  //     }
  //   }
  //   if(type === 'intr'){
  //     setInter(!inter)
  //     if(inter){
  //       setSelectedDocuments([...selectedDocuments, type]);
  //     }}
  //   if(type === 'tstmnl') {
  //     setTestimonial(!testimonial)
  //     if(testimonial){
  //       setSelectedDocuments([...selectedDocuments, type]);
  //     }}

  //   console.log(selectedDocuments)
  // }

  // return(
  //   <div>
  //     <Table hover borderless className="border">
  //       <thead>
  //         <tr>
  //             <th>Documents</th>
  //             <th>Submit</th>
  //           </tr>
  //         </thead>
  //         <tbody>

  //           <tr>
  //             <th scope="row">S.S.C</th>
  //             <td >
  //               <input type="checkbox" onChange={()=>handleCheck("mtr")} />
  //             </td>

  //           </tr>
  //           <tr>
  //             <th scope="row">H.S.C</th>
  //             <td >
  //               <input type="checkbox" onChange={()=>handleCheck("intr")} />
  //             </td>

  //           </tr>
  //           <tr>
  //             <th scope="row">Testimonial</th>
  //             <td >
  //               <input type="checkbox" onChange={()=>handleCheck('tstmnl')} />
  //             </td>

  //           </tr>

  //         </tbody>
  //       </Table>
  // </div>
  // )
// };

// export default Documents;


import React, { Component } from 'react'
import { Input, Table } from 'reactstrap';

const checkboxes = [
  'S.S.C MarkSheet', 'H.S.C MarkSeet', 'Testimonial', 'Admission Form', 'GST AdmitCard', 'Subject Selection Form', 'Registration Form' 
];
class Documents extends Component {
    state = {
      checkedItems: new Map(),
    }
   handleChange=(e)=> {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
   }

  render() {   
    console.log(this.state.checkedItems) 
    return (
      <>
        {
          <Table hover borderless className="border">
          <thead>
            <tr>
              <th>Documents</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
          {checkboxes.map(item => (
            <tr>
              <th key={item}>
              {item}
            </th>
             <td>
             <Input type="checkbox" 
             checked={this.state.checkedItems.get(item)} 
             onChange={this.handleChange} 
             name={item}/>
             </td>
            </tr>
            
          ))}
           <tr>
             <th>Remaining Documents Will Be Submit In : </th>
             <td>
               <Input
                 required
                 id="exampleDate"
                 name="date"
                 placeholder="date placeholder"
                 type="date"
               />
             </td>
           </tr>
         </tbody>
       </Table>
          
        }
      </>
    );
  }
}
export default Documents;

