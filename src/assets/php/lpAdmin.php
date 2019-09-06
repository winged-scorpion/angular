<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$user = json_decode(file_get_contents('php://input'), true);
$admin = 'admin';
$password = '159973';
$adminInput = $user['login'];
$passwordInput = $user['password'];
if($adminInput == $admin && $passwordInput == $password){
    $user['status'] = true;
    echo json_encode($user);
}else{
    $user['status'] = false;
    echo json_encode($user);
}



