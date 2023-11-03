export default function constructCallingInfo({contacts}) {
 let phone =  { 
   phoneNumber: contacts.phoneNumber || "000-000-00" }  
 
 return phone;
}