let addressBookList;
window.addEventListener("DOMContentLoaded", (event) => {
  addressBookList=getEmployeePayrollFromLocalStorage();
  document.querySelector(".person-count").textContent = addressBookList.length;
  createInnerHtml();
});
const getEmployeePayrollFromLocalStorage=()=>
{
    return localStorage.getItem("AddressBookList") ? JSON.parse(localStorage.getItem("AddressBookList")) : [];
}
//  Viewing address Book details in a Tabular Format from JS File using Template Literals.
const createInnerHtml = () => {
const CreateHeaderhtml =
"<th>Full Name</th><th>Phone Number</th><th>Address</th><th>City</th><th>State</th><th>Zip</th><th>Actions</th>";
    let innerHtml = `${CreateHeaderhtml}` ;
    if(addressBookList.length == 0)return;
    addressBookList.forEach(addressBook=>{
        innerHtml=`${innerHtml}
        <tr>
            <td>${addressBook._fullName}</td>
            <td>${addressBook._phone}</td>
            <td>${addressBook._address}</td>
            <td>${addressBook._City}</td>
            <td>${addressBook._State}</td>
            <td>${addressBook._zip}</td>
            <td>
                <img name="${addressBook._id}" src="../assets/icons/delete-black-18dp.svg" alt="delete" id="icon">
                <img name="${addressBook._id}" src="../assets/icons/create-black-18dp.svg" alt="create" id="icon">  
            </td>
        </tr>      
    `;
    });
document.querySelector("#display-table").innerHTML = innerHtml;
};