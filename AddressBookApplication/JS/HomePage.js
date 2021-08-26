let addressBookList;
window.addEventListener("DOMContentLoaded", (event) => {
  addressBookList=getEmployeePayrollFromLocalStorage();
  document.querySelector(".person-count").textContent = addressBookList.length;
  createInnerHtml();
  localStorage.removeItem('editAb');
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
                <img id="${addressBook._id}" src="../assets/icons/delete-black-18dp.svg" alt="delete" id="icon" onclick="remove(this)">
                <img id="${addressBook._id}" src="../assets/icons/create-black-18dp.svg" alt="create" id="icon" onclick="update(this)">  
            </td>
        </tr>      
    `;
    });
document.querySelector("#display-table").innerHTML = innerHtml;
};

const update=(node)=>{
    let addressBookData = addressBookList.find(abData=>abData._id==node.id);
    if(!addressBookData)return;
    localStorage.setItem('editAb',JSON.stringify(addressBookData));
    window.location.replace(site_properties.register_page);
  }

const remove= (node) =>
{
  let abData=addressBookList.find(addressData => addressData._id == node.id);
  if(!abData) return ;
  const index= addressBookList.map(addressData => addressData._id).indexOf(abData._id);
  addressBookList.splice(index,1);
  localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
  document.querySelector(".person-count").textContent=addressBookList.length;
  createInnerHtml();
}