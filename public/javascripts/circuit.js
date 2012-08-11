  var chromeapp_promo = false;

  var circuit_load_url = "";
  var circuit_save_url = "";
  var circuit_id = "";
  var circuit_revnum = "";
  var circuit_name = "";
  var circuit_absolute_url = "";
  var circuit_user_username = "";
  var circuit_user_absolute_url = "";
  
  var circuitlab_preferences = {};

  
  
  circuitlab_preferences["schematic_resistor_default_style"] = "US";
  

  $(document).ready(function(){
    window.init_sim('editor_container');
    
    $('.topbar .nav').dropdown();
    $('#splash_inner').click( function() {
      $('#startupsplashscreen').fadeOut(500);
    });
  });

