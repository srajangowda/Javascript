 var student={
            name:"srajan",
            age:17,
            studies:"Computer science",
        };
        student.age=18
document.getElementById("phara").innerHTML=student.name + " of age " + student.age + " Studies " + student.studies;
    </script>

    <!-- <script>
        var student=new Object();
        student.name="Siraj",
        student.age=17,
        student.studies="CS";
        document.getElementById("phara").innerHTML=student.name + " of age " + student.age + " Studies " + student.studies;
    

    </script> -->

    <script>
       let user={
        name:"Srajan",
        age:18,
       };
       function sayHi(){
         alert("Hello !");
       }
      user.message=sayHi;
      document.getElementById("phara").innerHTML="Hi "+ user.name ;
      document.getElementById("click").onclick=user.message ;
