const getStoredItemList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return []
    }
}
const addToStoredItemList = (id) =>{
    const storedList = getStoredItemList();
    if(storedList.includes(id)){
        alert('already exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}
const getStoredWishlist = () =>{
    const storedWishlistStr = localStorage.getItem('wish-list');
    if(storedWishlistStr){
       const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else{
        return []
    }
}
const addToStoredWishlist = (id)=>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        alert('already exist')
    }
    else{
        storedWishlist.push(id);
        const storedListStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list', storedListStr)
    }
}

export {addToStoredItemList, getStoredItemList, addToStoredWishlist, getStoredWishlist}