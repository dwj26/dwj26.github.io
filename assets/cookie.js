(function() {

function createCookie(name,value,days,path) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path="+path;
    }

function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

var cookieMessage = document.getElementById('cookieConsent');
if (cookieMessage == null) {
    return;
}
var cookie = readCookie('seen-cookie-message');
if (cookie != null && cookie == 'yes') {
    cookieMessage.style.display = 'none';
} else {
    cookieMessage.style.display = 'block';
}

// Set/update cookie
var cookieExpiry = cookieMessage.getAttribute('data-cookie-expiry');
if (cookieExpiry == null) {
    cookieExpiry = 30;
}
var cookiePath = cookieMessage.getAttribute('data-cookie-path');
if (cookiePath == null) {
    cookiePath = "/";
}

document.getElementById('cookieok').onclick = createCookie.bind(null,'seen-cookie-message','yes',cookieExpiry,cookiePath);
document.getElementById('cookieok').onclick = function myFunction() {
  var x = document.getElementById('cookieConsent');
  x.style.display = "none";
}
})();
