var HOST = "http://www.shenghuoxi.com/";
var HOST_DIR = HOST+"nc/mobile/";
var HOST_DIR_PC = HOST+"nc/";

 function getLocalTime(timeInString){  
 	var time = new Date(parseInt(timeInString*1000));
	var   year = time.getFullYear();  
    var   month = time.getMonth()+1;     
    var   date = time.getDate();    
    return  year+"年"+month+"月"+date+"日";  
};