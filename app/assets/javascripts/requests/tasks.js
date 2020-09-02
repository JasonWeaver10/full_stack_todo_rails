$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
  
  // Show Tasks request
  var indexTasks = function (successCB, errorCB) {
    var request = {
      type: 'GET',
      url: 'api/tasks?api_key=1',
      success: successCB,
      error: errorCB
    }
    $.ajax(request);
  };


  // Post Task request
  var postTask = function (content) {
    var request = {
      type: 'POST',
      url: 'api/tasks?api_key=1',
      data: {
        task: {
          content: content
        }
      },
      success: function () {
        getTasks('all')
      },
      error: function () {
        console.log('error')
      }
    }
    $.ajax(request);
  };

  // Delete task request
  var deleteTask = function (id) {
    var request = {
      method: 'DELETE',
      url: 'api/tasks/' + id +'?api_key=1' ,
      success: function () {
        getTasks('all');
      },
      error: function () {
        console.log("error")
      }
    }
    $.ajax(request);
  };

  // Edit task request
  var editTask = function (id, content) {
    var request = {
      type: 'PUT',
      url: 'api/tasks/' + id + '?api_key=1',
      data: {
        task: {
          id: id,
          content: content,
        }        
      },
      success: function () {
        getTasks('all');
      },
      error: function () {
        console.log('error');
      }
    }
  $.ajax(request);
  };

  //Mark Complete
  var taskCompleted = function (id) {
    var request = {
        type: 'PUT',
        url: 'api/tasks/' + id + '/mark_complete?api_key=1',
        
        success: function () {
          getTasks('all');
        },
        error: function () {
          console.log('error');
        }
    }
    $.ajax(request);
  }

  //Mark Active 

  var taskActive = function (id) {
    var request = {
        type: 'PUT',
        url: 'api/tasks/' + id + '/mark_active?api_key=1',
       
        success: function () {
          getTasks('all');
        },
        error: function () {
          console.log('error');
        }
    }
    $.ajax(request);
  }