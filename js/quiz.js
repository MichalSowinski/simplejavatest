var score = 0; 
var total = 6; 



function init() {
	sessionStorage.setItem('question1', 'c');
	sessionStorage.setItem('question2', 'a');
	sessionStorage.setItem('question3', 'a');
	sessionStorage.setItem('question4', 'b');
	sessionStorage.setItem('question5', 'd');
	sessionStorage.setItem('question6', 'b');
}

$(document).ready(function() {
	$(' .questions').hide();
	
	$('#question1').show();
	
	$('#question1 #submit').click(function() {
		$('.questions' ).hide();
		process('question1');
		$('#question2').fadeIn(300);
		
		return false;
	});
	
		$('#question2 #submit').click(function() {
		$('.questions' ).hide();
		process('question2');
		$('#question3').fadeIn(300);
		return false;
	});
	
		$('#question3 #submit').click(function() {
		$('.questions' ).hide();
		process('question3');
		$('#question4').fadeIn(300);
		return false;
	});
	
		$('#question4 #submit').click(function() {
		$('.questions' ).hide();
		process('question4');
		$('#question5').fadeIn(300);
		return false;
	});
	
		$('#question5 #submit').click(function() {
		$('.questions' ).hide();
		process('question5');
		$('#question6').fadeIn(300);
		return false;
	});
	

	$('#question6 #submit').click(function() {
		$('.questions' ).hide();
		process('question6');
		$('#results').fadeIn(300);
		return false;
	});

	function process(question){
	if(question == "question1"){
		var submitted = $('input[name=question1]:checked').val()
		if(submitted == sessionStorage.question1){
			score++
			
		}
		
	}	
	
		if(question == "question2"){
		var submitted = $('input[name=question2]:checked').val()
		if(submitted == sessionStorage.question2){
			score++
			
		}
		
	}	
	
		if(question == "question3"){
		var submitted = $('input[name=question3]:checked').val()
		if(submitted == sessionStorage.question3){
			score++
			
		}
		
	}	
	
		if(question == "question4"){
		var submitted = $('input[name=question4]:checked').val()
		if(submitted == sessionStorage.question4){
			score++
			
		}
		
	}	
	
		if(question == "question5"){
		var submitted = $('input[name=question5]:checked').val()
		if(submitted == sessionStorage.question5){
			score++
			
		}
		
	}	
	
		if(question == "question6"){
		var submitted = $('input[name=question6]:checked').val()
		if(submitted == sessionStorage.question6){
			score++
			
		}
		var result = score/total *100;
		
		if(result>=60){
				$('#results').html('<h3>Your final score is:'  +"<span style='color:green'>"+result+"%"+"</span>"+'. Congratulations!!!<br/><a href ="enterSite.html">Try one more time</a></h3>');
		}else if(result<60){
			$('#results').html('<h3>Your final score is: ' +"<span style='color:red'>"+result+"%"+"</span>"+ '. You did not pass the test<br/><a href ="enterSite.html">Try one more time</a></h3>');
		}
	
		
		
		
	}
			
	return false;
		
	}
	
});

window.addEventListener('load',init,false);