// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  initialize();
}

// Otherwise, we need to wait for the DOM to be ready before
// starting initialization since add-ons are injected
// *before* `document.documentElement` is defined.
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
    var padnumbers = document.querySelectorAll("#lockscreen-passcode-pad a");
    document.getElementById("lockscreen-passcode-code").style.bottom = "27.4rem";
    document.getElementById("lockscreen-passcode-pad").style.height = "27.4rem";

    for (var i = 0; i < padnumbers.length; i++) {
      padnumbers[i].style.height = "7.1rem";
    }

}
