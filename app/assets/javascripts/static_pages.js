var getTasks = function  (displayType) {
  if ($('.static_pages.index').length > 0) {
    indexTasks(function (response) {
      var htmlString = response.tasks.map(function(task) {

        switch (displayType) {
          case 'all': 
            if (task.completed === true) {
              // Gets tasks and checks boxes if completed is true
              return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
              " + task.content + "\
              </div><button class='edit editTask' data-id="+ task.id + ">Edit Item</button></button><button class='remove' data-id="+ task.id + ">Remove Item</button><label for='mark'>Completed?</label></label><input class='mark' type='checkbox' checked data-id="+ task.id + ">";
            } else {
              // Gets tasks and leaves boxes unchecked if false
              return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
              " + task.content + "\
              </div><button class='edit editTask' data-id="+ task.id + ">Edit Item</button></button><button class='remove' data-id="+ task.id + ">Remove Item</button><label for='mark'>Completed?</label></label><input class='mark' type='checkbox' data-id="+ task.id + ">";
            };
          break;

          case 'active':
            if (task.completed === false) {
              return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
              " + task.content + "\
              </div><button class='edit editTask' data-id="+ task.id + ">Edit Item</button></button><button class='remove' data-id="+ task.id + ">Remove Item</button><label for='mark'>Completed?</label></label><input class='mark' type='checkbox' data-id="+ task.id + ">";
            } else {
              
            }
          break;

          case 'completed':
            if (task.completed === true) {
              return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
              " + task.content + "\
              </div><button class='edit editTask' data-id="+ task.id + ">Edit Item</button></button><button class='remove' data-id="+ task.id + ">Remove Item</button><label for='mark'>Completed?</label></label><input class='mark' type='checkbox' checked data-id="+ task.id + ">";
            }else {
            }
          break;
        }
      });
      $("#tasks").html(htmlString);
    });
  }
}



// show tasks on page load
  $(document).on("turbolinks:load", function () {
   
    getTasks('all');
  
// mark complete / active
    $(document).on("change", ".mark", function(){
      var checkId = $(this).prev().prev().attr('data-id');
      if($(this).prop("checked") === true){
        taskCompleted(checkId);
      }
      else if($(this).prop("checked") === false) {
        taskActive(checkId);
      }  
    });

// remove button 
    $(document).on("click", ".remove", function() {
      var removeid = $(this).attr('data-id');
      deleteTask(removeid)
    });

// edit button
    $(document).on('click', '.editTask', function () {
      var editId = $(this).attr('data-id');
      $(this).prev().prepend('<input class="editInput" type="text-box"></input><button class="submit">Submit</button>')
      $(".edit").toggleClass('editTask');
      $(document).on('click', '.submit', function () {
        $('.edit').toggleClass("editTask");
        var editContent = $('.editInput').val();
        editTask(editId, editContent);
      })
    });

// add task button
    $('.add').click(function () {
      newTaskInfo = $('.newTask').val();
      postTask(newTaskInfo);
      // (getTasks('all'));
      $('.newTask').val("");
    });

// show completed checkbox
    $('.completed').click(function () {
      getTasks('completed');
    });

// show active checkbox
    $('.active').click(function () {
      getTasks('active');
    });

// show all tasks checkbox
    $('.all').click(function () {
      getTasks('all');
    });

  
  });