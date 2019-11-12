

//$.get("http://localhost:7001/api/v1/shops",function(data,status){
//const shopSelect = document.getElementById('sel');
//console.log(data);
//})

$.ajax({
  method: "GET",
  url: "http://localhost:7001/api/v1/shops",
}).done( ( data ) => {
    const shopSelect = document.getElementById('sel');
    var  store=[];
	var  store2,store3,t;
	for (i=0 ;i<data.rows.length ; i++){
		store.push(data.rows[i][0]);}
	store=jQuery.unique(store);
	
	$.each(store, function(i, val) {
			$("#sel").append($("<option value='" + store[i] + "'>" + store[i] + "</option>"));
		  })
		  
	$("#sel").change( function(){
	$("#sel2 option").remove();
	$("#sel3 option").remove();
	store2=[];
	t=0;
	for (i=0 ;i<data.rows.length ; i++){
	if(data.rows[i][0]===$('#sel').val()){
		if(!t){
			$("#sel3").append($("<option value='" + data.rows[i+1][2] + "'>" + data.rows[i+1][2] + "</option>"));
			t=t+1;
		}else{
		store2.push(data.rows[i][1]);}
	}}
	$.each(store2, function(i, val) {
			$("#sel2").append($("<option value='" + store2[i] + "'>" + store2[i] + "</option>"));
		  })
	})
	
	$("#sel2").change( function(){
	$("#sel3 option").remove();
	store3=[]
	for (i=0 ;i<data.rows.length ; i++){
	if(data.rows[i][1]===$('#sel2').val()){store3.push(data.rows[i][2]);}}
	$.each(store3, function(i, val) {
		$("#sel3").append($("<option value='" + store3[i] + "'>" + store3[i] + "</option>"));
		  })
	})
});
function readCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function add2(){
	if(!$('#address').val()){alert("請輸入地址");}else{
		var iid=Date.now();
		var nn=document.getElementById("table1").rows.length;
		var sum=0
	
		for(i=1;i<nn;i++){
		$.ajax({
		 url: `http://localhost:7001/api/v1/cart`,                        // url位置
		 type: 'POST',                   // post/get
		  data: {
			'shop': document.getElementById("table1").rows[i].cells[0].innerHTML, 
			 'name': document.getElementById("table1").rows[i].cells[1].innerHTML,
			 'price': document.getElementById("table1").rows[i].cells[2].innerHTML,
			 'num': document.getElementById("table1").rows[i].cells[3].innerHTML,
			'customer':readCookie('userName') ,
			'id':iid }  
		 })
	}
	
	for(i=1;i<nn;i++){
		sum=sum+parseInt(document.getElementById("table1").rows[i].cells[4].innerHTML);
	}
	
	$.ajax({
		url: `http://localhost:7001/api/v1/cart/address`,                        // url位置
		type: 'POST',                   // post/get
		 data: {
			'customer':readCookie('userName'), 
			'idname': iid,
			'price': sum,
			'address':$('#address').val()
		}  
		})
	alert("成功下訂");
	var num = document.getElementById("table1").rows.length;
	   for (i = 0; i < (num-1); i++) {
	   document.getElementById("table1").deleteRow(-1);
	   }
	}
	
	}
	
	
	



function add (){
var t=[$('#sel').val(),$('#sel2').val(),$('#sel3').val(),$('#sel4').val()];
var num =document.getElementById("table1").rows.length;
document.getElementById("table1").insertRow(num);
 for(j = 0; j < 5; j++) {
if(j<4){document.getElementById("table1").rows[num].insertCell(j).innerHTML=t[j];}else{
	document.getElementById("table1").rows[num].insertCell(j).innerHTML=t[2]*t[3]
}
}
}

function removeList() {
	var num = document.getElementById("table1").rows.length;
 for (i = 0; i < (num-1); i++) {
  document.getElementById("table1").deleteRow(-1);
  }
}