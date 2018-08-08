	<?php
	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$mailTo = 'darius.balaj@icloud.com';
		$headers = "From: ".$email;
		$txt = "You have recieved".$name."\n\n".$message;
		
		mail($mailTo, $subject, $txt, $headers);
	}
	?>