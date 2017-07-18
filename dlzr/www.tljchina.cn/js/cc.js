function cc(ids,nr,reg)
{
	var s1='#'+ids;
	var s2='#_'+ids;
	
	var reg=reg;
	   if(!reg.test($(s1).val())){
		$(s2).html('<font color="red" style="font-size:12px">'+nr+'</font>');
			$(s1).focus();
			return 1;
		}else{
			$(s2).html('');
			return 2;
			}
	  
}