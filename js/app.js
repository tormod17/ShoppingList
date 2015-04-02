/* check item is in store and get price*/

var price= 0;
var total=0;


$(document).on("click", ".checkButton", function(){
	
    	   
    $(this).parent().removeClass( "cross" ).addClass( "tick");  
		
		price= parseFloat(prompt('what price?'));   /* get input price from user*/
		
		while ( isNaN(price)) {                /*   while input isn't a number ask for a number in £'s*/
			
			price= parseFloat(prompt('Please enter a number in £s?'))
		
		};

		
	$(this).parent().append( '  ' +  '£' + "<span class='editPrice'>" + price + "</span>");  /*add price to list row */
		

	total += price;
			
	$('.total').text('Total Cost £ '+ total);
	return total;


	
	
});





/*Remove item from list *********************/


$(document).on('click', '.removeButton', function(){


		var dummy= $(this).siblings('.editPrice')

		$(this).parent().remove();

		
	 	price =parseFloat(dummy[0].innerText);

	
		total -= price;

		$('.total').text('Total Cost £:'+ total);
	
		return total;



});


/************Un-check from list *************/

$(document).on('click','.uncheckButton', function() {
	$(this).parent().removeClass('tick').addClass('cross');
}) 



/*/ **************Add Item to List ****************/

$(document).ready(function() {

	$( "input" ).keydown(function(e) {

		    var itemName = $( this ).val();
		    var checkButton= "<span class= 'checkButton'><i class='fa fa-check-circle'></i> </span>"
		    var uncheckButton= "<span class='uncheckButton'><i class='fa fa-times-circle'></i></span>"
		    var removeButton= "<span class='removeButton'> <i class='fa fa-minus-circle'></i></span>"
		    
		    if (e.keyCode == 13) {

		     		 $(".on-the-list ul").prepend('<li>' + itemName + ' '+ checkButton + uncheckButton  + removeButton + '</li>')
		     	   	 $('input').val("");

		 	}			 	
	})

});




   