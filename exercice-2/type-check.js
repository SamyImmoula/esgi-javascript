function type_check_v1($val,$type)
{
    if(Array.isArray($val) && $type=="array"){
        return true;
    }
    else{
        return false;
    }

    if($val == null && $type == "null"){
        return false;
    }
    else{
    	return false;
	}

    if(typeof $val == $type){
        return true;
    }
    else{
        return false;
    }

    if ($val instanceof Function && $type=="function") {
        return true;
    }
	else{
		return false;
	}

	if ($val instanceof Function && $type=="Object") {
        return true;
    }
	else{
		return false;
	}
}