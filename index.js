	function myFunction() {
		var a = document.getElementById("myNumber1").value;
		var b = document.getElementById("myNumber2").value;
		var c = document.getElementById("myNumber3").value;
		var d = (b*b)-(4*a*c);
		var re = ((-b))/(2*a);
		var im = (Math.abs(d))/(2*a);
		if(d>=0){
			document.getElementById("demo1").innerHTML = "x<sub>1</sub> = " + (re+im).toString();
			document.getElementById("demo2").innerHTML = "x<sub>2</sub> = " + (re-im).toString();

		}
		else if(d<0){
			document.getElementById("demo1").innerHTML = "x<sub>1</sub>=" + re + "+ i*"+ im;
			document.getElementById("demo2").innerHTML = "x<sub>2</sub>=" + re + "- i*"+ im;
			
		}
		
	}