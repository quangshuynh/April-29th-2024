  function showMessage(id) {
      var element = document.getElementById('message' + id);
      if(element.style.display === 'block') {
          element.style.display = 'none';
      } else {
          element.style.display = 'block';
      }
  }
