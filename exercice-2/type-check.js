function type_check_v1($val,$type)
{
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