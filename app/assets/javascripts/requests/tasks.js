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
  var postTask = function (content, successCB, errorCB) {
    var request = {
      type: 'POST',
      url: 'api/tasks?api_key=1',
      data: {
        task: {
          content: content
        }
      },
      success: successCB,
      error: errorCB
    }
    $.ajax(request).then(getTasks('all'));
  };

  // Delete task request
  var deleteTask = function (id) {
    var request = {
      method: 'DELETE',
      url: 'api/tasks/' + id +'?api_key=1' 
    }
    $.ajax(request).then(getTasks('all'));
  };

  // Edit task request
  var editTask = function (id, content, successCB, errorCB) {
    var request = {
      type: 'PUT',
      url: 'api/tasks/' + id + '?api_key=1',
      data: {
        task: {
          id: id,
          content: content,
        }        
      },
      success: successCB,
      error: errorCB
    }
  $.ajax(request).then(getTasks('all'));
  };

  //Mark Complete
  var taskCompleted = function (id, successCB, errorCB) {
    var request = {
        type: 'PUT',
        url: 'api/tasks/' + id + '/mark_complete?api_key=1',
        
        success: successCB,
        error: errorCB
    }
    $.ajax(request).then(getTasks('all'));
  }

  //Mark Active 

  var taskActive = function (id, successCB, errorCB) {
    var request = {
        type: 'PUT',
        url: 'api/tasks/' + id + '/mark_active?api_key=1',
       
        success: successCB,
        error: errorCB
    }
    $.ajax(request).then(getTasks('all'));
  }