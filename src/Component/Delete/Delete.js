import React, { useState } from 'react';
import './Delete.css'
import DeleteFakeData from '../../FakeData/DeleteFakeData.json'

const Delete = () => {
    const [data, setData] = useState(DeleteFakeData);
    const [list, setList] = useState([]);
    const handleSingleDelete = (oneByOne) => {
        const newArray = data.filter(singleData => singleData !== oneByOne);
        setData(newArray)
    }
    const handleAllDelete = () => {
        setData([])
    };
    const handleCheckBox = (oneByOne) => {
        setList([...list, oneByOne])
      
    }
    const deleteSelected =() => {
        const update = [];
        data.map(singleStudent => (
             console.log(list.filter(singleData => singleData !== singleStudent))
        ))
        
    };
    
    return(
        
    <div class="container">
        <div class="view6">


            <div class="card">
                <div class="card-body">

                    <div class="tableHolder_mail">
                        <table class="table" id='table_filterNameEmail'>
                            <thead>
                                <tr>
                                    <th> <input type="checkbox" id='selectAll' /> Select All</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(oneByOne => (
                                            <tr id={Math.random()}>
                                                <td td > < input type = 'checkbox'
                                                class = 'checkbox_insideTBODY '
                                                onChange = {
                                                    () => handleCheckBox(oneByOne)
                                                }
                                                /></td >
                                                <td>{oneByOne.Name} <span class='hiddenMessage_ifSkipped '>{oneByOne.Skip}</span></td>
                                                <td>{oneByOne.Email}</td>

                                                <td>

                                                    <button onClick={() => handleSingleDelete(oneByOne)} class='btn btn-danger DeleteSelectedRow '><i class="fa fa-times" aria-hidden="true"></i></button>
                                                </td>
                                            </tr>
                                    ))
                                }
                                
                                


                            </tbody>


                        </table>
                    </div>

                </div>
            </div>


            <div class="card text-right">
                <div class="card-body ">

                    <div class="form-group mr-5">
                        <input type="submit" value='Delete All' class='btn btn-danger DeleteAllSelectedRow' onClick={handleAllDelete}/>
                        < input type = "submit"
                        value = 'Delete All Selected'
                        class = 'btn btn-danger DeleteAllSelectedRow'
                        onClick = {
                            deleteSelected
                        }
                        />
                    </div>
                </div>
            </div>



        </div>
       

       
        

    </div>
    );
};

export default Delete;