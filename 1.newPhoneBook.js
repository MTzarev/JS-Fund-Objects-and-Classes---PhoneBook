function newPhoneBook (input){
    let phoneBook = {}
for (let contact of input) {
    let firstSpaceIndex = contact.indexOf(` `)
    let name = contact.substring(0, firstSpaceIndex);
    let number = contact.substring(firstSpaceIndex+1, contact.length)
    
   phoneBook[name]=number;
}
for (let name in phoneBook) {
    
    console.log(`${name} -> ${phoneBook[name]}`);
}
}


newPhoneBook(['Tim 0834 212 554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
// newPhoneBook(['George 0552554',
// 'Peter 087587',
// 'George 0453112',
// 'Bill 0845344']);
