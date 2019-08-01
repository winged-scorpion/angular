<?php
header("Access-Control-Allow-Origin: *");
$admin = 'admin';
$password = 159973;

$adminInput = $_POST['admin'];
$passwordInput = $_POST['password'];

if($adminInput == $admin && $passwordInput == $password){
    $item = true;
}else{
    $item = false;
}
$data= json_encode($item);
echo $data;



