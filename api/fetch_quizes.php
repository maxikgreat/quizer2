<?php
  require 'db_connect.php';

  $conn = openConnection();

  if($conn){
    $sql = 'SELECT quizes.id, title, author, time_created, best_result, COUNT(question_block.quiz_id) as question_count
            FROM quizes
            INNER JOIN question_block on quizes.id = question_block.quiz_id
            GROUP BY quizes.id
          ';
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      $rows = array();
      while($row = $result->fetch_assoc()) {
           $rows[] = $row;
      }
      echo json_encode($rows);
    } else {
      echo false;
    }

    closeConnection($conn);
  }