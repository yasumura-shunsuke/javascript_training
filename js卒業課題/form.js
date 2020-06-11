'use strict'


/*フォームからsubmitされた時TODOリスト挿入*/
$(document).ready(function(){
  $('#js-form').submit( function(event){
    event.preventDefault();
    const input = $("#js-input-todo").val();
    if(input !== ""){
      addToDo(input);  
      $('#js-input-todo').val("");
    }
  });
});

/*削除ボタンを押された場合、親要素ごと削除 イベントを後から追加はonを使う*/
$(document).ready(function(){
  $(document).on('click', '.js-batsu', function(){
    /*removeはキューに入らず実行されるため強制的にキューに入れる*/
    $(this).parent().parent().fadeOut(1000).queue(function(){
      this.remove();
    });
  });
});

$(document).ready(function(){
  $('.js-btn-all').click(function(){
  $('.js-todo-data').show();
  });
});

/*完了済みタスクを表示*/
$(document).ready(function(){
$('.js-btn-complete').click(function(){
  $('.js-todo-data').hide();
  $('.is-check').show();
});
});

/*未完了のタスクを表示*/
$(document).ready(function(){
  $('.js-btn-incomplete').click(function(){
    $('.js-todo-data').show()
    $('.is-check').hide();
  });
});


/*TODOの状態によって表記を変更する*/
$(document).ready(function(){
  $(document).on('click', '.js-todo-status',function(){
    $(this).parent().parent().toggleClass('is-check')
    if($(this).parent().parent().hasClass('is-check')){
      $(this).text("未完了にする");
   
    /*TODOリストの内容に打ち消し線*/
      $(this).parent().parent().find("td").css("text-decoration", "line-through")
     }else{
       
      $(this).text("完了にする");   
    /*TODOリストの内容に打ち消し線除去*/
      $(this).parent().parent().find("td").css("text-decoration", "none")
     }
  });
});


/*TODOリスト用HTML生成*/
function addToDo(text){
const output = `<tr class="js-todo-data"><td>${text}</td>
                <td><button class="js-todo-status"> 完了にする</button></td>
                <td><button class="js-batsu">×</button></td>
                </tr>`;
  
  $(output).prependTo('#js-todo').hide().fadeIn(1000);
}


