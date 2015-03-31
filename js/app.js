

/*Check on List and  Prompt them for the price*/




/* Mar item as in store and get price*/

var price= 0;
var total=0;




$(document).on("click", ".checkButton", function(){
	
    	   
    $(this).parent().removeClass( "cross" ).addClass( "tick");
		
		price= parseFloat(prompt('what price?'));
		
		while ( isNaN(price)) {
			
			price= parseFloat(prompt('Please enter a number in £s?'))
		
		};

		

	$(this).parent().append( '  ' +  '£' + price);
		

	total += price;
	
	$('.total').text('Total Cost £:'+ total);
	
	console.log(total);
	
	return total;


		
});


/*Remove item from list */

$(document).on('click', '.removeButton', function(){
	$(this).parent().remove();
	
	total -= price;

	$('.total').text('Total Cost £:'+ total);
	
	console.log(price);
	console.log(total);

	return total;

});




/*Un check from list */

$(document).on('click','.uncheckButton', function() {
	$(this).parent().removeClass('tick').addClass('cross');
}); 




// Add Item to List ///
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



	



      /*  console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("alt-cross-off");*/
