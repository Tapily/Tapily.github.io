var myHeading = document.querySelector('#header1');

var start = 'Hi ', name, end = ', Welcome !', result;

name   = prompt('What is your name ?');

result = start + name + end;

alert(result);

var child1 = document.getElementById('child1'),

        child2 = document.getElementById('child2'),

        result = document.getElementById('result');


    child1.addEventListener('mouseover', function(e) {

        result.innerHTML = "TECHNOLOGIE " + e.relatedTarget.id;

    });


    child2.addEventListener('mouseout', function(e) {

        result.innerHTML = "MAKE MY BRAND IN TECHNOLOGY " + e.relatedTarget.id;

    });
   

		document.onmousemove = animateCircles;

		var colors = ['#ccc','#6cf','#eba13a'];

		function animateCircles (event) {
			let circle = document.createElement("div");
			circle.setAttribute("class", "circle");
			document.body.appendChild(circle);

			circle.style.left = event.clientX + 'px';
			circle.style.top = event.clientY + 'px';

			var color = colors[Math.floor(Math.random() * colors.length)];
			circle.style.borderColor = color;

			circle.style.transition = "all 0.5s linear 0s";

			circle.style.left = circle.offsetLeft - 20 + 'px';
			circle.style.top = circle.offsetTop - 20 + 'px';

			circle.style.width = "50px";
			circle.style.height = "50px";
			circle.style.borderWidth = "5px";
			circle.style.opacity = 0;
			
			setTimeout(function() {
                circle.remove();
            }, 500);
		}
// Brake Chain Animation
    function brakeChain(){
      let chain = document.getElementById('chain');
      chain.innerHTML = "&#xf0c1;";

      setTimeout(function(){
        chain.innerHTML = "&#xf127;";
      }, 1000);
    }

    // Call Animation
    brakeChain();

    // Animate Every 2 Seconds
    setInterval(brakeChain, 2000);

    // Battery Charge Animation
    function chargeBattery(){
      let battery = document.getElementById('battery');
      battery.innerHTML = "&#xf244;";
      setTimeout(function(){
        battery.innerHTML = "&#xf243;";
      }, 1000);
      setTimeout(function(){
        battery.innerHTML = "&#xf242;";
      }, 2000);
      setTimeout(function(){
        battery.innerHTML = "&#xf241;";
      }, 3000);
      setTimeout(function(){
        battery.innerHTML = "&#xf240;";
      }, 4000);
    }

    // Run Animation
    chargeBattery();

    // Run Animation Every 5 Seconds
    setInterval(chargeBattery, 5000);

    // Hourglass Tip Animation
    function hourglassTip(){
      let hourglass = document.getElementById('hourglass');
      hourglass.innerHTML = "&#xf251;";
      setTimeout(function(){
        hourglass.innerHTML = "&#xf252;";
      }, 1000);
      setTimeout(function(){
        hourglass.innerHTML = "&#xf253;";
      }, 2000);
    }

    // Run Animation
    hourglassTip();

    // Run Animation Every 3 Seconds
    setInterval(hourglassTip, 3000);
