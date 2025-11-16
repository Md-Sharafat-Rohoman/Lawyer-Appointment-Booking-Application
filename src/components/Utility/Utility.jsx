
const getDuty = () =>{
    const storeDutyStr = localStorage.getItem('soterData');
    if(storeDutyStr){
        const getDutyStr = JSON.parse(storeDutyStr)
        return getDutyStr;
    }
    else{
        return [];
    }
}
const addToStoreDuty = (id) => {
    const storeDuty = getDuty();
    if(storeDuty.includes(id)){
        alert('Duty already added')
    }
    else{
        storeDuty.push(id);
        console.log(storeDuty);
        localStorage.setItem('soterData',JSON.stringify(storeDuty))
        
    }
}

export {getDuty, addToStoreDuty};



// const getBookStore = () =>{
//     const storedBookStr = localStorage.getItem('readList');
//     if(storedBookStr){
//         const storeData = JSON.parse(storedBookStr);
//         return storeData;
//     }
//      else{
//         return [];
//      }
// }
// const addToStoreBD = (id) =>{
//     const storeBook = getBookStore();
//     if(storeBook.includes(id)){
//         alert('Book already added');
//     }
//     else{
//         storeBook.push(id);
//         console.log(storeBook);
//         localStorage.setItem('readList',JSON.stringify(storeBook));
//     }
// }

// export {getBookStore, addToStoreBD};