$(document).ready(function(){
  $('#myModal').modal('show');
  $('#nav-icon-nav').click(function(){
    $(this).toggleClass('open');
  });
    $('#maior').click(function(){
      $('#myModal').modal('hide');
    });
  });

  