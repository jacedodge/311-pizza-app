manhattanFunction = () => {
    var str = document.getElementById('numOfComplaints').value
    
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=MANHATTAN&$select=descriptor, resolution_description",
        type: "GET",
        data: {
          "$limit" : str,
          
        } 
    }).done(function(data) {
      alert("Retrieved " + data.length + " records from the dataset!");
      let printArray = document.getElementById("printArray")
      let arr = data;
      let list = "<ul>";

      for (let i=0;i < arr.length;i++){
        list += "<li>" + arr[i].descriptor + "</li>" + 
        "<li>" + arr[i].resolution_description + "</li>"
      }
        list += "</ul>"

      printArray.innerHTML = list
    });
    

}

brooklynFunction = () => {
  var str = document.getElementById('numOfComplaints').value
  
  $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=BROOKLYN&$select=descriptor, resolution_description",
      type: "GET",
      data: {
        "$limit" : str,
        
      }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
      let printArray = document.getElementById("printArray")
      let arr = data;
      let list = "<ul>";

      for (let i=0;i < arr.length;i++){
        list += "<li>" + arr[i].descriptor + "</li>" + 
        "<li>" + arr[i].resolution_description + "</li>"
      }
        list += "</ul>"

      printArray.innerHTML = list
    });
}

queensFunction = () => {
  var str = document.getElementById('numOfComplaints').value
  
  $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=QUEENS&$select=descriptor, resolution_description",
      type: "GET",
      data: {
        "$limit" : str,
        
      }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    let printArray = document.getElementById("printArray")
    let arr = data;
    let list = "<ul>";

    for (let i=0;i < arr.length;i++){
      list += "<li>" + arr[i].descriptor + "</li>" + 
      "<li>" + arr[i].resolution_description + "</li>"
    }
      list += "</ul>"

    printArray.innerHTML = list
  });
}

statenIslandFunction = () => {
  var str = document.getElementById('numOfComplaints').value
  
  $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=STATEN ISLAND&$select=descriptor, resolution_description",
      type: "GET",
      data: {
        "$limit" : str,
        
      }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
      let printArray = document.getElementById("printArray")
      let arr = data;
      let list = "<ul>";

      for (let i=0;i < arr.length;i++){
        list += "<li>" + arr[i].descriptor + "</li>" + 
        "<li>" + arr[i].resolution_description + "</li>"
      }
        list += "</ul>"

      printArray.innerHTML = list
    });
  

}

bronxFunction = () => {
  var str = document.getElementById('numOfComplaints').value
  
  $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=BRONX&$select=descriptor, resolution_description",
      type: "GET",
      data: {
        "$limit" : str,
        
      }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
      let printArray = document.getElementById("printArray")
      let arr = data;
      let list = "<ul>";

      for (let i=0;i < arr.length;i++){
        list += "<li>" + arr[i].descriptor + "</li>" + 
        "<li>" + arr[i].resolution_description + "</li>"
      }
        list += "</ul>"

      printArray.innerHTML = list
    });
  

}

// arr[i].resolution_description

showHide = () => {
  list.append(arr[i].resolution_description)
}