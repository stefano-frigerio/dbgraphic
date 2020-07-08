<?php
    // Recupero i valori inseriti nel form
    $name = $_POST['yourname'];
    $email = $_POST['email'];
    $commento = $_POST['commento'];

    $testo = "Nome: " . $name . chr(13)
        . "Email: " . $email . chr(13)
        . "Messaggio: " . $commento;


    if (mail('info@dbgraphic.it', 'Richiesta informazioni - ' . $nome, $testo))
    {
        echo "<script language='javascript'>";
        echo "alert('Richiesta inviata correttamente, ti ricontatteremo il prima possibile')";
        echo "</script>";
    }
    else
    {
        echo "<script language='javascript'>";
        echo "alert('Richiesta non inviata, riprovare')";
        echo "</script>";
    }
    echo '<a href = "javascript:history.go(-1)"><center>Torna indietro</center></a>';
?>