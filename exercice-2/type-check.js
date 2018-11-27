function type_check_v1($val,$type)
{
    if(Array.isArray($val) && $type=="array"){
        return true;
    }
    else{
        return false;
    }
    if($val == null){
        return false;
    }
    else if(typeof $val == $type){
        return true;
    }
    else{
        return false;
    }
}