$(document).ready(function(){
    $('#txTokken').keypress(function(e){
        var tecla = (e.keyCode?e.keyCode:e.which); 
        if(tecla == 13){ 
            verificarTokken();
        }
    }); 
        
	$(function () {
        $('#datetime_picker_aterrisagem').datetimepicker({        
        });
        $('#datetime_picker_decolagem').datetimepicker({ 		
            useCurrent: false //Important! See issue #1075    
        });
        $("#datetime_picker_aterrisagem").on("dp.change", function (e) {
            $('#datetime_picker_decolagem').data("DateTimePicker").minDate(e.date);
        });
        $("#datetime_picker_decolagem").on("dp.change", function (e) {
            $('#datetime_picker_aterrisagem').data("DateTimePicker").maxDate(e.date);
        });
    });
	$('#txNome').blur(function(){
		if(apenasNumeros($('#txNome').val()))
    	{
    		removeItens();
    		var Mandalore = ["Kruart-mon", "Clivelle", "Kracken"];
    		for( i = 0; i < Mandalore.length; i++){
    			var quant = i + 1;
    			$('#checklist_planeta').append('<option value="'+quant+'">'+Mandalore[i]+'</option>');
    		}
    	}else{
    		removeItens();
    		var NalHutta = ["Vril-Kh5a3r-Non","Hd2gas4ter","H1Jlç098aioewtw","P0oetsr", " Za12reopd´os", "Q8Pei-usa8jndl_etar"];

    		for( i = 0; i < NalHutta.length; i++){
    			var quant = i + 1;
    			$('#checklist_planeta').append('<option 	value="'+quant+'">'+NalHutta[i]+'</option>');
    		}
    	}
	});
	$('#checklist_nave').blur(function(){
	var valor = $('#checklist_nave').val();
		switch(valor) {
    	case "1":
        	$('#img_nave').css({'background':'url(img/Wings_of_the_Master_thumb.jpg) center center no-repeat', 'width': '100%', 'height': '100%'});
            //attr('src','img/Wings_of_the_Master_thumb.jpg');
        	break;
    	case "2":
        	$('#img_nave').css({'background':'url(img/Bwing1920x1080.png) center center no-repeat', 'width': '100%', 'height': '100%'});
            //attr('src','img/Bwing1920x1080.png');
        	break;
        case "3":
        	$('#img_nave').css({'background':'url(img/image_070e5a4a.jpeg) center center no-repeat', 'width': '100%', 'height': '100%'});
            //.attr('src', 'img/image_070e5a4a.jpeg');
        	break;
    	case "4":
        	$('#img_nave').css({'background':'url(img/CloneZ95Headhunter-SWE.jpg) center center no-repeat', 'width': '100%', 'height': '100%'});
            //.attr('src', 'img/CloneZ95Headhunter-SWE.jpg');
        	break;
        case "5":
        	$('#img_nave').css({'background':'url(img/JediCruiser-TG.png) center center no-repeat', 'width': '100%', 'height': '100%'});
            //.attr('src','img/JediCruiser-TG.png');
        	break;
        case "6":
        	$('#img_nave').css({'background':'url(img/GR-75_Medium_Transport.jpg) center center no-repeat', 'width': '100%', 'height': '100%'});
            //.attr('src', 'img/GR-75_Medium_Transport.jpg');
        	break;
        case "7":
        	$('#img_nave').css({'background':'url(img/Phoenix-SWE.jpg) center center no-repeat', 'width': '100%', 'height': '100%'});
            //.attr('src', 'img/Phoenix-SWE.jpg');
        	break;
    	default:
        	break;
	}
  });
  var myDate = new Date();
  var displayDate = (myDate.getDate()+ '/' + (myDate.getMonth()+1)  + '/' + myDate.getFullYear());
  $('#dt_aterrisagem').val(displayDate);  

  webcam.set_api_url( 'test.php' );
        webcam.set_quality( 90 ); // JPEG quality (1 - 100)
        webcam.set_shutter_sound( true ); // play shutter click sound
        webcam.set_hook( 'onComplete', 'my_completion_handler' );

        function take_snapshot(){
            // take snapshot and upload to server
            document.getElementById('upload_results').innerHTML = '<h1>Uploading...</h1>';
            webcam.snap();
        }

        function my_completion_handler(msg) {
            // extract URL out of PHP output
            if (msg.match(/(http\:\/\/\S+)/)) {
                // show JPEG image in page
                document.getElementById('upload_results').innerHTML ='<h1>Upload Successful!</h1>';
                // reset camera for another shot
                webcam.reset();
            }
            else {alert("PHP Error: " + msg);
        }
    }           
});

function base64_tofield() {
                $('#formfield').val($.scriptcam.getFrameAsBase64());
            };
            function base64_toimage() {
                $('#image').attr("src","data:image/png;base64,"+$.scriptcam.getFrameAsBase64());
            };
            function base64_tofield_and_image(b64) {
                $('#formfield').val(b64);
                $('#image').attr("src","data:image/png;base64,"+b64);
            };
            function changeCamera() {
                $.scriptcam.changeCamera($('#cameraNames').val());
            }
            function onError(errorId,errorMsg) {
                $( "#btn1" ).attr( "disabled", true );
                $( "#btn2" ).attr( "disabled", true );
                alert(errorMsg);
            }          
            function onWebcamReady(cameraNames,camera,microphoneNames,microphone,volume) {
                $.each(cameraNames, function(index, text) {
                    $('#cameraNames').append( $('<option></option>').val(index).html(text) )
                });
                $('#cameraNames').val(camera);
            }

function verificarTokken(){
    var valor = $('#txTokken').val();
    var data = new Date();
    var valortokken = (data.getDate() + (data.getMonth()+1)) + 5;
    if(valortokken ==  valor){
        $(".tokken").fadeOut();
        $("section").fadeIn(1500);
    }
}

function apenasNumeros(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    if(numsStr == ""){
    	return true;
    }
    return false;
}

function removeItens(){
	var combobox = document.getElementById("checklist_planeta");
	var count = combobox.length + 1;
	for (i = 1; i < count ; i++) {
	$("select#checklist_planeta option[value='"+i+"']").remove(); 
	}
}