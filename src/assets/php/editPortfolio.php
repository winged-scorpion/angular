<?php
header("Access-Control-Allow-Origin: *");
$file = file_get_contents('./assets/portfolio.json');  // Открыть файл data.json
$taskList = json_decode($file,TRUE);        // Декодировать в массив
$test = 'сработало';
unset($file);                               // Очистить переменную $file
$taskList[] = array(
    'status'=> $_POST['status'],
      'name'=> $_POST['name'],
      'img'=>  $_POST['img'],
      "engine"=> $_POST['engine'],
      "description"=> $_POST['description'],
      "link"=> $_POST['link']
);        // Представить новую переменную как элемент массива, в формате 'ключ'=>'имя переменной'
file_put_contents('./assets/portfolio.json',json_encode($taskList));  // Перекодировать в формат и записать в файл.
$data = json_encode($taskList);
echo $data;
unset($taskList);

