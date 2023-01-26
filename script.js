console.log("working");
var check=  false;
$('div#ball').click(function () {
                    if(!check){
                    var element = $(this);
                    element.css('left', '60px');
                    $('body').css('background-color', 'black');
                     $('toggle-button').css('background-color', 'black');
                     element.css('background-color', 'black');
                      $('#heading').css('color', 'white');     
                                        check =  true;       
                    }else{
                    var element = $(this);
                    element.css('left', '0');
                    $('body').css('background-color', 'white');
                     $('toggle-button').css('background-color', 'white');
                      $('#heading').css('color', 'black');
                                        check = false;
                    }

                    

                    
                    
})



