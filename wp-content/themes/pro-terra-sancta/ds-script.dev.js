// Custom JS goes here ------------

jQuery(document).ready(function($){

  custom_menu_width();
  custom_project_norder();
  
  $('.give-recurring-donors-choice-period option').each(function(){
    let t = $(this);
    let v = t.val();
    if(v == 'day' || v == 'week'){
      t.remove();
    }
  });
  function custom_project_norder(){
    var form = "form#project_list_norder";
    
    $(form + " input[type='button']").click(function(){
      $select = $(form +" select");
      $optionSelect = $select.children("option:selected");
      location.href = $optionSelect.val();
    });
  }
  function custom_menu_width() {
    var dWidth = $(document).width();
    $("#top-menu ul.sub-menu ul.sub-menu").each(function( index, element ){
      
      if(dWidth > 980){
        jQuery(this).css("left",jQuery(this).parent().parent().width());
      } else {
        jQuery(this).css("left",0);
      }
    });
  }
  $(window).resize(function(){custom_menu_width()});
  $('.et_pb_toggle_title').click(function(){
    var $toggle = $(this).closest('.et_pb_toggle');
    if (!$toggle.hasClass('et_pb_accordion_toggling')) {
      var $accordion = $toggle.closest('.et_pb_accordion');
      if ($toggle.hasClass('et_pb_toggle_open')) {
        $accordion.addClass('et_pb_accordion_toggling');
        $toggle.find('.et_pb_toggle_content').slideToggle(700, function() { 
          $toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close'); 
          
        });
      }
      setTimeout(function(){ 
        $accordion.removeClass('et_pb_accordion_toggling'); 
      }, 750);
    }
  });
  $('.et_pb_accordion .et_pb_toggle_open').addClass('et_pb_toggle_close').removeClass('et_pb_toggle_open');

  $('.et_pb_accordion .et_pb_toggle').click(function() {
    $this = $(this);
    setTimeout(function(){
      $this.closest('.et_pb_accordion').removeClass('et_pb_accordion_toggling');
    },700);
  });
});

jQuery(window).load(function(){
  jQuery('#fb-i').each(function(){
    jQuery(this).attr('src', 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fproterrasancta%2F&tabs=timeline&width=500&height=385&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=644291819048907');
  });
});