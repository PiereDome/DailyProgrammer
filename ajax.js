var obj;

function ProcessXML(url) {
  // native  object

  if (window.XMLHttpRequest) {
    // obtain new object
    obj = new XMLHttpRequest();
    // set the callback function
    obj.onreadystatechange = processChange;
    // we will do a GET with the url; "true" for asynch
    obj.open("GET", url, true);
    // null for GET with native object
    obj.send(null);
  // IE/Windows ActiveX object
  } else if (window.ActiveXObject) {
    obj = new ActiveXObject("Microsoft.XMLHTTP");
    if (obj) {
      obj.onreadystatechange = processChange;
      obj.open("GET", url, true);
      // don't send null for ActiveX
      obj.send();
    }
  } else {
    alert("Your browser does not support AJAX");
  }
}

function processChange() {
    // 4 means the response has been returned and ready to be processed
    if (obj.readyState == 4) {
        // 200 means "OK"
        if (obj.status == 200) {
            // process whatever has been sent back here:
        // anything else means a problem
        } else {
            alert("There was a problem in the returned data:\n");
        }
    }
}