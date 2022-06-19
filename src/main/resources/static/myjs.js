


    var form1=document.getElementById("form1");
    var form2=document.getElementById("form2");
    var form3=document.getElementById("form3");
    var form4=document.getElementById("form4");
    //var form5=document.getElementById("form5");

    var next1=document.getElementById("next1");
    var back1=document.getElementById("back1");
    var next2=document.getElementById("next2");
    var back2=document.getElementById("back2");
    var next3=document.getElementById("next3");
    var back3=document.getElementById("back3");
    var submit=document.getElementById("submit");
    next1.onclick=function(){

        if(validate_form1()){
        form1.style.left="-500px";
        form2.style.left="40px";}
        
    }

    next2.onclick=function(){

        if(validate_form2()){
        form2.style.left="-500px";
        form3.style.left="40px";}
        
    }

    next3.onclick=function(){
        if(validate_form3()){
        form3.style.left="-500px";
        form4.style.left="40px";
        }
    }

    back1.onclick=function(){
        form1.style.left="40px";
        form2.style.left="-500px";
    }


    back2.onclick=function(){
        form2.style.left="40px";
        form3.style.left="-500px";
    }

    back3.onclick=function(){
        form3.style.left="40px";
        form4.style.left="-500px";
    }

   submit.onclick=function(){
	let email=document.getElementById("validate4").value; 
	let contact=document.getElementById("validate").value;
	if(contact=="")
	{
		alert("Enter phone number");
		return false;
	}	
	if(contact.length!= 10)
	{
		alert("Enter 10 digit number");
		return false;
	}
	if(email=="")
	{
		alert("Enter email");
		return false;
	}	
    }


    function validate_form1()
    {
        var t1=document.getElementById("validate1").value;
   		var t2=document.getElementById("dob").value;
		reg = /[a-z]|[A-Z]|\s/;
        if(t1=="" ){
        alert("Fill all the box.Enter your name");
        return false;}
		else if( t2=="" ){
        alert("Fill all the box.Enter your date of birth");
        return false;}
        else{
			for(i=0;i<t1.length;i++)
			{
				if(reg.exec(document.getElementById("validate1").value[i]) == null)
				{alert("Non aplahbet not allowed");
				return false;}
			}
            return true;
        }

    }

    function validate_form2()
    {
        var t2=document.getElementById("validate2").value;
        if(t2=="" ){
        alert("Fill all the box.Enter your permanent address");
        return false;}
        else{  
            return true;
        }

    }

    function validate_form3()
    {
        var t3=document.getElementById("validate3").value;
		var t6=document.getElementById("grade").value;
        if(t3=="" ){
        alert("Fill all the box.Enter University name.");
        return false;}
		if(t6==""){
        alert("Fill all the box.Enter your grade");
        return false;}
        else{  
		if(t6<0 || t6>10)
		{alert("Grade is not in the range");
		return false;}
		else
            return true;
        }

    }

