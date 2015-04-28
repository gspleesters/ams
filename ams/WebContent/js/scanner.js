/**
 * 
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false); 
        document.getElementById('test').addEventListener('click', this.test, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    
    test: function(){
    	//window.open('http://www.google.com','GoogleWindow','width=800, height=600');
    	//window.location.href = 'https://locadream.ec-is.be';
    	//$.get("https://assist.ec-is.be/en/webservice/gateway/get",{username:"A0EBA1A55A2A225C9D13",password:"A239E5B3F4B3A63EB030",template:"OBU_GATEWAY",properties:{key:"imei",value:"861001000032264"}},function(data){},"json");
    	
    	$.post("storeEvent",{"link":"https://locadream.ec-is.be/en/public/locator/index/type/asset/template/auto/id/1732/"},function(data){},"json");
    	
    	/*
    	$.ajax({
    	    type: 'POST',
    	    url: 'https://assist.ec-is.be/en/webservice/route/getall',
    	    //crossDomain: true,
    	    //data:'{"username":"A0EBA1A55A2A225C9D13","password":"A239E5B3F4B3A63EB030"}',
    	    data: '{"username":"A0EBA1A55A2A225C9D13","password":"A239E5B3F4B3A63EB030"}',
    	    dataType: 'json',  	    
    	    success: function(responseData, textStatus, jqXHR) {
    	        var value = responseData.someKey;
    	    },
    	    error: function (responseData, textStatus, errorThrown) {
    	        alert('POST failed.');
    	    }
    	}); 
    	*/
    		
    	
    },
    
    callbackname: function(json){
    	
    },
    
    scan: function() {
        console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 

        	/*
            alert("We got a barcode\n" + 
            "Result: " + result.text + "\n" + 
            "Format: " + result.format + "\n" + 
            "Cancelled: " + result.cancelled);
			*/
        	
           /* 
           console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
            document.getElementById("info").innerHTML = result.text;
            console.log(result);
            */
            
            if (result.format == "QR_CODE") {
            	 //alert("QR CODE = " + result.text + "\n" ); 
            	$.post("storeEvent",{"link":result.text},function(data){},"json");
            }else{
            	alert("Wrong format " + result.format);
            }
            

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    },


};
