//http://www.w3schools.com/ajax/ajax_examples.asp
$(document).ready(() =>{ 
	$("#action").click((event) =>{
        $.ajax({
            url : "ajax_info.txt",
            dataType: "text",
            success : (data)  =>{
                $("#demo").html(data);
            }
        });
    });	
});