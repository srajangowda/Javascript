<script>
        let cars=["bmw","suzuki","kia"];
        document.getElementById("phara").innerHTML=cars;
        //print an lement using index value
        let bmw=cars[0];
        document.getElementById("phara").innerHTML=bmw;
        //print last word in array
        let last=cars[cars.length-1];
        document.getElementById("phara").innerHTML=last;
         //loop over an array
         cars.forEach((item,index,array)=>{
            console.log(items,index);
         });
         to string()
        
         document.getElementById("phara").innerHTML=cars.toString();
        //push()
        cars.push("Audi");
        document.getElementById("phara").innerHTML=cars;
//concat
        let bikes=["hero","yamaha","ktm"];
        let vehicles=cars.concat(bikes);
        document.getElementById("phara").innerHTML=vehicles;
        //map()
        let num1=[2,4,6,8,10];
        let num2=num1.map(multiply);
        function multiply(value){
            return value*2;
        }
        document.getElementById("phara").innerHTML=num2;

        //arrayfilter()

        let num3=num1.filter(comp);
        function comp(value){
            return value>=4;

        }
        document.getElementById("phara").innerHTML=num3;

        //array.reduce()
        let num4=num1.reduce(sum);
        function sum(total,value){
            return total+value;
        }
        document.getElementById("phara").innerHTML=num4;
          </script>
