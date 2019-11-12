function readCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

var nn1=readCookie('userName')

$.ajax({
    method: "GET",
    url: `http://localhost:7001/api/v1/shopss?shop=${nn1}`,
  }).done( ( data ) => {
     var num =data.rows.length;
    for(i = 0; i < num; i++){
           document.getElementById("table1").insertRow(i+1)
                for(j = 0; j < 3; j++) {
                    document.getElementById("table1").rows[i+1].insertCell(j).innerHTML=data.rows[i][j];
                                        }
    }
  })