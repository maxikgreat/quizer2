<?php
  function openConnection(){
    $servername = "localhost:8889";
    $username = "root";
    $password = "root";
    $database = "quizer";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
  }

  function closeConnection($conn){
    $conn->close();
  }
