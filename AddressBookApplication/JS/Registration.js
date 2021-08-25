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
    
  });
//save create and save payroll object
const save = () => {
    try {
      let addressBookData = AddressBook();
      CreateOrUpdateLocal(addressBookData);
    } catch (e) {
      return;
    }
  };
//onSubmit validates this function
const AddressBook=()=>{
    let addressBook=new Person;
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
//selects value for radio buttons

const setTextValue=(id,value)=>{
    const attribute = document.querySelector(id);
    attribute.textContent=value;
}
const getInputValue = (id)=>{
    let value = document.getElementById(id).value;
    return value;
}
const CreateOrUpdateLocal = (addressBookData) => {
    //JSON Object
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
      addressBookList.push(addressBookData);
    } else {
      addressBookList = [addressBookData];
    }
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