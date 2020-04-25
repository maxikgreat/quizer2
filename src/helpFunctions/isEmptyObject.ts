

export function isEmptyObject(obj: Object) {
    for( let key in obj )  {
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}