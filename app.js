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
      console.log(data);
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
    console.log(data);
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
    console.log(data);
  });
  

}

statenIslandFunction = () => {
  var str = document.getElementById('numOfComplaints').value
  
  $.ajax({
      url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=3-1-1&borough=STATENISLAND&$select=descriptor, resolution_description",
      type: "GET",
      data: {
        "$limit" : str,
        
      }
  }).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
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
    console.log(data);
    complaints
  });
  

}

// tableFill = (data) => {
//   for (i=0;i<data.length;i++){

//   }
// }