<?php
session_start();
if(isset ($_POST["send"]))
{
    $getname=$_POST["myname"];
    include 'connection.php';
    $idvalue=$_SESSION["myvalue"];
    $sql="update entry set name='$getname' where id='$idvalue'";
    $result=mysqli_query($con,$sql)
            or die("error in query");
    if($result)
    {
        echo "Uploaded $_SESSION[myvalue] re ..... ";
    }
    else
    {
        echo "$_SESSION[myvalue] nahi hua";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Formulario Atraque</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/jquery-2.2.1.min.js"></script>
     <script type="text/javascript" src="js/Moment.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
    <script type="text/javascript" src="js/webcam.js"></script>
    <script type="text/javascript" src="js/form.js"></script>
    
  </head>
  <body>
    <header>
    	<div class="conteiner">
    		<img src="img/logo_fhinck.png">
    	</div>
    </header>
    	<div class="tokken">
    		<input id="txTokken" type="text" placeholder="Digite o código é pressione ENTER" class="form-control"></input>
    	</div>
    <section class="formulario">
    	<form class="formulario-acesso" action='envia_mail.php'>
    		<div class="campo_mail">
    		<p>Email:</p>
    		<input type="email" name='email' class="form-control" required></input>
    		</div>
    		<div class="campo_nome">
    		<p>Nome:</p>
    		<input id="txNome" type="text" name='nome' class="form-control" required></input>
    		</div>
    		<div class="campo_planeta">
    		<p>Qual seu planeta?</p>
    		<select id="checklist_planeta" name='planeta' class="form-control" required>
  				<option value="0">Selecione...</option>
			</select>
    		</div>
    		<div class="campo_nave">
    		<p>Qual nave?</p>
    		<select id="checklist_nave" name='nave' class="form-control" required>
    		    <option value="0">Selecione...</option>
  				<option value="1">B-WING PROTOTYPE (BLADE WING)</option>
  				<option value="2"> B-WING FIGHTER</option>
  				<option value="3">BROKEN HORN</option>
  				<option value="4">CLONE Z-95 STARFIGHTER</option>
  				<option value="5">CRUCIBLE</option>
  				<option value="6">GR-75 MEDIUM TRANSPORT</option>
  				<option value="7">GX1 SHORT HAULE</option>
			</select>
				<div class="continer-img">
					<img id="img_nave" src="">				
				</div>
			
    		</div>
    		<div class="solicitacao">
    			<ul>
    				<li>
    					<input type="checkbox" name='solict1' value="1" />
    					Abastecimento/Combustível
    				</li>
    				<li>
    					<input type="checkbox" name='solict2' value="2" />
    					Descarregar Carga
    				</li>
    				<li>
    					<input type="checkbox" name='solict3' value="3" />
    			 	   Manutenção Elétrica/Eletrônica
    				</li>
    				<li>
    					<input type="checkbox" name='solict4' value="4" />
    					Manutenção Mecânica
    				</li>
    				<li>
    					<input type="checkbox" name='solict5' value="5" />
    					Manutenção Mecânica
    				</li>
    				<li>
    					<input type="checkbox" name='solict6' value="6" />
    					Manutenção de Propulsores
    				</li>
    				<li>
    					<input type="checkbox" name='solict7' value="7" />
    					Verificação de Sistemas
    				</li>
    				<li>
    					<input type="checkbox" name='solict8' value="8" />
    					Limpeza da Aeronave
    				</li>
    			</ul>
    		</div>
    		<div class="campo_foto">
    			<script language="JavaScript">
					document.write( webcam.get_html(320, 240) );
				</script>
				<input id="btn-self" type=button value="Self" onClick="take_snapshot()">	
    		</div>
    		<div class="datas">
    			 <div class='campo_data_aterrisagem'>
        			<div class="form-group">
            			<div class='input-group date' id='datetime_picker_aterrisagem'>
                			<input type='text' name='aterrisagem' class="form-control" required/>
                				<span class="input-group-addon">
                    				<span class="glyphicon glyphicon-calendar"></span>
                				</span>
            			</div>
        			</div>
    			</div>
    			<div class='campo_data_decolagem'>
        			<div class="form-group">
            			<div class='input-group date' id='datetime_picker_decolagem'>
                			<input type='text' name='decolagem' class="form-control" required/>
                			<span class="input-group-addon">
                    			<span class="glyphicon glyphicon-calendar"></span>
                			</span>
            			</div>
        			</div>
    			</div>
    		</div>
    		<div id="upload_results" style="background-color:#eee;"></div>		
    		<input id="btn-solicitacao" type="submit" value="Encaminhar Solicitar"></input>
    	</form>
    </section>

    <footer></footer>
  </body>
</html>
