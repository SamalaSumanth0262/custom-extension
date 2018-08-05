$(document).ready(function() {
    $("#todo_list").html(localStorage.getItem('listItems'));
    $("#replica").html(localStorage.getItem('all_notes'));


    $('.add_items').submit(function(event){
      event.preventDefault();
      var item = $("#todo_list_item").val();

      if(item)
      {
        $("#todo_list").append("<li class='todo-rouding'>"+item+"<a id='completed' alt='add'><i class=\"fas fa-check\"></i>\n" +
          "\n</a><a id='remove'><i class=\"far fa-trash-alt\"></i>\n" + "\n</a></li>");
        localStorage.setItem('listItems',$('#todo_list').html());
        $("#todo_list_item").val("");
      }

    });

    $(document).on('click', '#completed', function(){
      $(this).parent().css("text-decoration","line-through");
      localStorage.setItem('listItems', $('#todo_list').html());
    });

    // REMOVE JUQERY
    $(document).on('click', '#remove', function(){
      $(this).parent().remove();
      localStorage.setItem('listItems', $('#todo_list').html());

    });




});









