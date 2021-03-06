var config = require('./dbconfig');
const sql = require('mssql');
async function get_applicants(unit) {
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT * FROM PassedApplicants${unit} WHERE [IsAdmissionCancelled] != 1 and [IsAutoMigrationOff] != 1 and UnitName = '${unit}'   order by Position asc`;
        let product = await pool.request()
            .query(Query);
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
async function get_first_position(unit) {
    try {
        let pool = await sql.connect(config);
        const Query="SELECT MIN(Position) FROM PassedApplicants" + unit + " WHERE [IsAdmissionCancelled] != 1 and [IsAutoMigrationOff] != 1 and UnitName = " + "'" + unit + "'";
        let product = await pool.request()
            .query(Query);
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
async function get_last_position(unit) {
    try {
        let pool = await sql.connect(config);
        const Query="SELECT MAX(Position) FROM PassedApplicants" + unit + " WHERE [IsAdmissionCancelled] != 1 and [IsAutoMigrationOff] != 1 and UnitName = " + "'" + unit + "'";
        let product = await pool.request()
            .query(Query);
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
async function get_allotted_subject_order(application_id, unit) {      // problem may occur
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT AllottedDepartmentOrder, AllottedDepartmentId FROM PassedApplicants${unit} WHERE ApplicationId = '${application_id}'`;
        let product = await pool.request()
            .query(Query);
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
async function get_subject_choices_by_id(application_id) {          /// incomplete what is %s I dont know
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT SubjectId, [Order], ApplicationId FROM Admission2021.SubjectChoices WHERE ApplicationId ='${application_id}'` ;
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
async function get_subject_id_by_order(application_table_id, order) {          /// incomplete
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT SubjectId FROM Admission2021.SubjectChoices WHERE ApplicationId = ${application_table_id} AND [Order] = ${order}`;
               
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
async function get_department_status_by_id(department_id, unit) {          /// incomplete
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT SeatStatus, TotalSeats, AllottedSeats, DepartmentName FROM Departments${unit} WHERE Id = ${department_id}`;
               
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
async function get_departments(unit) {          /// incomplete
    try {
        let pool = await sql.connect(config);
        const Query=`SELECT * FROM Departments${unit} WHERE SeatStatus = 1`;
               
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
function abbreviatedMonth(monthNumber)
{
    switch(monthNumber)
    {
        case 0:
            return `Jan`;
        case 1:
            return `Feb`;
        case 2:
            return `Mar`;
        case 3:
            return `Apr`;
        case 4:
            return `May`;
        case 5:
            return `Jun`;
        case 6:
            return `Jul`;
        case 7:
            return `Aug`;
        case 8:
            return `Sep`;
        case 9:
            return `Oct`;
        case 10:
            return `Nov`;
        case 11:
            return `Dec`;
       
    }
}
function zeropadded(number)
{
    if(number<10)
    {
        return `0${number}`;
    }
    return `${number}`;
}
function hourMinuteFormat(x)
{
    let hour=x.getHours();
    let minute=x.getMinutes();
    let AmPm;
    if(hour>=0&&hour<=11)
    {
        if(hour==0)
        {
            hour=12;
        }
        AmPm=`AM`;
    }
    else{
        hour-=12;
        if(hour==0)
        {
            hour=12;
        }
        AmPm=`PM`;
    }
    hour=zeropadded(hour);
    minute=zeropadded(minute);
    return `${hour}${miniute}${AmPm}`;
}
function properFormate(x)
{
    let date=x.getDate();
    date=zeropadded(date);
    let month=x.getMonth();
    month=abbreviatedMonth(month);
    let time=hourMinuteFormat(x);
    return `${date}${month}${time}`;

}
async function allocate_subject(application_table_id, prev_department_order, prev_department_id, unit) {          /// incomplete
    try {
        let pool = await sql.connect(config);
        choices = get_subject_choices_by_id(application_table_id);
        number_of_choices =  Object.keys(choices).length;

        const x=  new Date();
        const formatedDate=properFormate(x);
        let order=1;
        while(order <= number_of_choices && order < prev_department_order)
        {
            let subject_id = get_subject_id_by_order(application_table_id, order);
            seat_status, total_seats, allotted_seats, department_name = get_department_status_by_id(subject_id, unit);//problem
        
        if (seat_status ==true && allotted_seats < total_seats && total_seats != 0){
            if (prev_department_id != 0){
               
                p_seat_status, p_total_seats, p_allotted_seats, p_department_name = get_department_status_by_id(prev_department_id, unit);//problem
                p_seat_status = 1;
                p_allotted_seats = p_allotted_seats - 1;
                let Query=`UPDATE Departments${unit} SET [SeatStatus] =${p_seat_status} , [AllottedSeats] =${p_allotted_seats} , [UpdatedDate] = '${formatedDate}' WHERE [Id] =${prev_department_id}`;
                //query executable code is not written
                //cursor.execute(query)
            }
            let Query=`UPDATE PassedApplicants${unit} SET [AllottedDepartmentId] = ${subject_id} , [AllottedDepartment] ='${department_name}' , [AllottedDepartmentOrder] = ${order} , [UpdatedDate] = '${formatedDate}' WHERE [Id] =${application_table_id}`;
             //query executable code is not written
                //cursor.execute(query)
            allotted_seats = allotted_seats + 1;
            if (allotted_seats == total_seats)
               { seat_status = 0;}
            else
                {seat_status = 1;}
            Query=`UPDATE Departments${unit} SET [SeatStatus] =${seat_status} , [AllottedSeats] =${allotted_seats} , [AllottedDepartmentOrder] = ${order} , [UpdatedDate] = '${formatedDate}' WHERE [Id] =${subject_id}`;
            //query executable code is not written
                //cursor.execute(query)
            
            return department_name
        }
        else{
            order = order + 1}

        }
     

        const Query=`SELECT * FROM Departments${unit} WHERE SeatStatus = 1`;
               
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
async function get_applicant_id_by_position(applicant_position, unit) {          /// incomplete
    try {
        let pool = await sql.connect(config);
        const Query=`"SELECT Id FROM PassedApplicants${unit} WHERE UnitName = '${unit}' AND Position = '${applicant_position}'`;
               
        let product = await pool.request()
            .query(Query);
        return product.recordsets; 

    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    get_applicants: get_applicants,
    get_first_position:get_first_position,
    get_last_position:get_last_position,
    get_allotted_subject_order:get_allotted_subject_order,
    get_subject_choices_by_id:get_subject_choices_by_id,
    get_subject_id_by_order:get_subject_id_by_order,
    get_department_status_by_id:get_department_status_by_id,
    get_departments:get_departments,
    get_applicant_id_by_position:get_applicant_id_by_position
    
}
