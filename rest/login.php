<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");


$con=mysqli_connect("localhost","root","","Exam");
if($con){
  
    $sql="select * from user";
    $result=mysqli_query($con,$sql);
    if($result){
        header("Content-type:JSON");
        $i=0;
        while($row=mysqli_fetch_assoc($result)){
           
            $response[$i]['email'] =$row['email'];
            $response[$i]['password'] =$row['password'];
           $i++; 
        }
        echo Json_encode($response,JSON_PRETTY_PRINT);
    }
}

?>