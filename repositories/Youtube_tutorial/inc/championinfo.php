<?php
	$name = $_POST['name'];
	require_once "phpfunctions.php";
	$query = $pdo->prepare("SELECT * From champions WHERE name = '$name'");
	$query->execute();
	$row = $query->fetchAll();
	
	$id= $row[0]['id'];
	$name= $row[0]['name'];
	$role= $row[0]['role'];
	$srole= $row[0]['srole'];
	$attack= $row[0]['attack'];
	$health= $row[0]['health'];
	$ability= $row[0]['ability'];
	$difficulty= $row[0]['difficulty'];
?>
	Name: <?php echo $name;?> <br>
    Role: <?php echo $role;?> <br>
    Secondary Role: <?php echo $srole;?> <br>
    Attack: <?php echo $attack;?>/100 <br>
    Ability: <?php echo $ability;?>/100 <br>
    Health: <?php echo $health;?>/100 <br>
    Ability: <?php echo $ability;?>/100 
    
