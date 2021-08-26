let isUpdate=false;
let AddressBookObj={};
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector("#name");
    name.addEventListener('input',function(){
        if(name.value.length == 0){
               setTextValue('#errorName',"");
               return;
        }
        try{
            (new Person()).fullName= name.value;
            setTextValue('#errorName',"");
        }catch(e){
            setTextValue('#errorName',e);
        }
    }); 
    const phone = document.querySelector("#phone");
    phone.addEventListener('input',function(){
        try{
            (new Person()).phone= phone.value;
            setTextValue('#errorPhone',"");
        }catch(e){
            setTextValue('#errorPhone',e);
        }
    }); 
    const zip = document.querySelector("#zip");
    zip.addEventListener('input',function(){
        try{
            (new Person()).zip= zip.value;
            setTextValue('#errorZipcode',"");
        }catch(e){
            setTextValue('#errorZipcode',e);
        }
    }); 
    checkUpdate();
    
  });

  const checkUpdate=()=>{
    const addressBookJSON = localStorage.getItem('editAb');
    isUpdate=addressBookJSON?true:false;
    if(!isUpdate)return;
    AddressBookObj=JSON.parse(addressBookJSON);
    setForm();
  }
 
//save create and save payroll object
const save = (event) => {
    try {
    setAddressBookObject();
    CreateOrUpdateLocal();
    resetForm();
    window.location.replace(site_properties.home_page);
    } catch (e) {
      return;
    }
  };
  const setAddressBookObject=()=>{
    AddressBookObj._fullName=getInputValue('name');
    AddressBookObj._phone =getInputValue('phone');
    AddressBookObj._address =getInputValue("address"); 
    AddressBookObj._City =getInputValue("city");
    AddressBookObj._State =getInputValue("state");
    AddressBookObj._zip =getInputValue("zip");
  }

const setTextValue=(id,value)=>{
    const attribute = document.querySelector(id);
    attribute.textContent=value;
}
const getInputValue = (id)=>{
    let value = document.getElementById(id).value;
    return value;
}
const CreateOrUpdateLocal = () => {
    //JSON Object
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList){
        let adressBookData = addressBookList.find(abData=>abData._id == AddressBookObj._id);
        if (!addressBookList) {
            addressBookList.push(createNewAddressBook());
        }else{
            const index = addressBookList.map(abData=>abData._id).indexOf(adressBookData._id);
            addressBookList.splice(index,1,createNewAddressBook(adressBookData._id));
        } 
    }else 
        addressBookList = [createNewAddressBook()];
    //JSON to String
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
  };
  const resetForm=()=>{
    setTextValue('#name','');
    setTextValue('#phone','');
    setTextValue('#zip','');
    setTextValue('#errorName','');
    setTextValue('#errorPhone','');
    setTextValue('#errorZipcode','');
    document.getElementById('city').value="";
    document.getElementById('state').value="";
}
const setForm=()=>{
    setValue('#name',AddressBookObj._fullName);
    setValue('#phone',AddressBookObj._phone);
    setValue('#address',AddressBookObj._address);
    setValue('#city',AddressBookObj._City);
    setValue('#state',AddressBookObj._State);
    setValue('#zip',AddressBookObj._zip);
    document.querySelector("#submitupdate").textContent="Update";
  }
  const setValue=(id,value)=>{
    const element = document.querySelector(id);
    element.value=value;
}
const createNewAddressBook=(id)=>{
    let abData = new Person();
    if(!id)
        abData.id = createNewPersonId();
    else 
        abData.id = id;
    AddressBook(abData);
    return abData;
    }
//Allocate ID
    const createNewPersonId=()=>{
    let personId = localStorage.getItem("PersonId");
    personId = !personId?1:(parseInt(personId)+1).toString();
    localStorage.setItem("PersonId",personId);
    return personId;
  }

const AddressBook=(addressBook)=>{
    try{
    addressBook.fullName= getInputValue('name');
    addressBook.phone=getInputValue('phone');
    addressBook.address = getInputValue("address");
    addressBook.City = getInputValue("city");
    addressBook.State = getInputValue("state");
    addressBook.zip = getInputValue("zip");
    alert(addressBook.toString());
    return addressBook;
        
}catch(e){
        alert(e);
    }
   
};