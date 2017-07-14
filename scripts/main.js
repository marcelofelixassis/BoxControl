var globaltotalentrada = 0
var globaltotalsaida = 0

//CARREGANDO TABELA INICIAL

$(document).ready(function(){

    $.getJSON("php/select_movement_home.php", function(data) {
    	var totalentrada = 0;
    	var totalsaida = 0;
        for(i = 0; i < data.movement.length; i++){
            novaLinha = '<tr>'+
                '<td>'+data.movement[i].driver+'</td>'+
                '<td>'+data.movement[i].details+'</td>'+
                '<td style="color: #adbf40;">R$ '+data.movement[i].entrance+'</td>'+
                '<td style="color: #f86554;">R$ '+data.movement[i].exit+'</td>'+
                '<td>'+data.movement[i].hour+'</td>'+
                '<td><a href="#" class="ask" onclick="testando('+data.movement[i].id+')"><img src="images/trash.png" alt="" title="" border="0"/></a></td>'+
                '</tr>';
                totalentrada = parseFloat(totalentrada) + parseFloat(data.movement[i].entrance);
                totalsaida = parseFloat(totalsaida) + parseFloat(data.movement[i].exit);
            $('#rounded-corner > tbody > tr:last').after(novaLinha);
        }
        globaltotalentrada = totalentrada;
        $("#totalentrada").text("R$ "+totalentrada);
        globaltotalsaida = totalsaida;
        $("#totalsaida").text("R$ "+totalsaida);
    });

    $.getJSON("php/select_values.php", function(data) {
        $("#caixaabertocom").text("R$ "+data.entrance);
        if(data.result == 'Utilize o botão fechar caixa'){
            $("#resultado").text(data.result);
        }else{
            $("#resultado").text("R$ "+data.result);
        }
    });
});

//ABRINDO JANELA MODAL DE ENTRADAS

$(document).ready(function(){
    $("a[rel=modal1]").click( function(ev){
        
        ev.preventDefault();

        var id = $(this).attr("href");

        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
             
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').show(); 
        $('#mascara').fadeTo("fast",0.7);
         
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
             
        $(id).css({'top':top,'left':left});
        $(id).show();

        //INSERINDO NOVA ENTRADA COM KEYPRESS - ENTER

        $(document).keypress(function(e) {
		    if(e.which == 13) {
		        $(document).ready(function(){
			        var motoristavalue = $("#motorista-entrada").val();
			        var detalhesvalue = $("#detalhes-entrada").val();
			        var valorvalue = $("#valor-entrada").val();
			        $.get("php/insert_movement_home.php",
			        {
			          driver: motoristavalue,
			          details: detalhesvalue,
			          value: valorvalue,
			          type: "entrance"
			        },
			        function(data, status){
			          
			        });
				});
	        	$("#mascara").hide();
	        	$(".window").hide();
	        	window.location.href = "";
		    }
		});   
    });

    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });  
});

//ABRINDO JANELA MODAL DE SAÍDAS

$(document).ready(function(){
    $("a[rel=modal2]").click( function(ev){
        ev.preventDefault();
         
        var id = $(this).attr("href");
         
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
             
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').show(); 
        $('#mascara').fadeTo("fast",0.7);
         
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
             
        $(id).css({'top':top,'left':left});
        $(id).show();   

        //INSERINDO NOVA SAÍDA COM KEYPRESS - ENTER

        $(document).keypress(function(e) {
		    if(e.which == 13) {
		        $(document).ready(function(){
			    	var motoristavalue = $("#motorista-saida").val();
	        		var detalhesvalue = $("#detalhes-saida").val();
			        var valorvalue = $("#valor-saida").val();
			        $.get("php/insert_movement_home.php",
			        {
			          driver: motoristavalue,
			          details: detalhesvalue,
			          value: valorvalue,
			          type: "exit"
			        },
			        function(data, status){
			          
			        });
				});
	        	$("#mascara").hide();
	        	$(".window").hide();
	        	window.location.href = "";
		    }
		});
    });

    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });   
});

//INSERINDO NOVA ENTRADA

$(document).ready(function(){
    $('.btnentrada').click(function(){
        var motoristavalue = $("#motorista-entrada").val();
        var detalhesvalue = $("#detalhes-entrada").val();
        var valorvalue = $("#valor-entrada").val();
        $.get("php/insert_movement_home.php",
        {
          driver: motoristavalue,
          details: detalhesvalue,
          value: valorvalue,
          type: "entrance"
        },
        function(data, status){
          
        });
    });
});

//INSERINDO NOVA SAÍDA

$(document).ready(function(){
    $('.btnsaida').click(function(){
        var motoristavalue = $("#motorista-saida").val();
        var detalhesvalue = $("#detalhes-saida").val();
        var valorvalue = $("#valor-saida").val();
        $.get("php/insert_movement_home.php",
        {
          driver: motoristavalue,
          details: detalhesvalue,
          value: valorvalue,
          type: "exit"
        },
        function(data, status){
          
        });
    });
});

//DELETANDO ITEM 

function testando(idparam){
	var name=confirm("Deseja apagar está informção ?")
	if (name==true){
		$.get("php/delete_movement_home.php",
        {
          id: idparam
        },
        function(data, status){
          
        });
        window.location.replace("http://localhost/modulo3");
	}
}

//ABRINDO A JANELA MODAL DE ABRIR CAIXA

$(document).ready(function(){
    $("a[rel=modal3]").click( function(ev){
        
        ev.preventDefault();

        var id = $(this).attr("href");

        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
             
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').show(); 
        $('#mascara').fadeTo("fast",0.7);
         
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
             
        $(id).css({'top':top,'left':left});
        $(id).show();

        //ABRINDO NOVO CAIXA COM KEYPRESS - ENTER

        $(document).keypress(function(e) {
            if(e.which == 13) {
                $(document).ready(function(){
                    var valueabrircaixa = $("#valor-abrircaixa").val();
                    if (valueabrircaixa == "") {
                        window.alert("Campo valor vazio!");
                    }else{
                        var alert=confirm("Ao abrir um novo caixa estará apagando os dados do dia anterior!");
                        if (alert==true){
                            $.getJSON("php/truncate_table_movement.php", function(data) {
                            }); 
                            $.getJSON("php/update_values.php", 
                            {
                                entrance: valueabrircaixa,
                                result: 'Utilize o botão fechar caixa'
                            },
                            function(data){

                            });  
                        }
                    }  
                });
                $("#mascara").hide();
                $(".window").hide();
                window.location.href = "";
            }
        });
    });
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });  
});

//ABRINDO CAIXA BUTTON CONFIRMAR

$(document).ready(function(){
    $('.btnabriracaixans').click(function(){
        var valueabrircaixa = $("#valor-abrircaixa").val();
        if (valueabrircaixa == "") {
            window.alert("Campo valor vazio!");
        }else{
            var alert=confirm("Ao abrir um novo caixa estará apagando os dados do dia anterior!");
            if (alert==true){
                $.getJSON("php/truncate_table_movement.php", function(data) {
                }); 
                $.getJSON("php/update_values.php", 
                {
                    entrance: valueabrircaixa,
                    result: 'Utilize o botão fechar caixa'
                },
                function(data){

                });  
            }
        }
    });
});

//FECHAR CAIXA

$(document).ready(function(){
    $("#btnfecharcaixa").click(function(){
        $.getJSON("php/select_values.php", function(data) {
            var alert=confirm("Deseja fechar o caixa?");
            if (alert==true){
                var caixaabertocomval = data.entrance;
                var resultadoval = (parseFloat(caixaabertocomval) + parseFloat(globaltotalentrada)) - parseFloat(globaltotalsaida);
                $.getJSON("php/update_values.php", 
                    {
                        entrance: caixaabertocomval,
                        result: resultadoval
                    },
                    function(data){
                }); 
                location.reload(); 
            }
        });

    });
});

//ABRINDO CAIXA COM SALDO ANTERIOR

$(document).ready(function(){
    $('.btnabriracaixasa').click(function(){
        var alert=confirm("Ao abrir um novo caixa estará apagando os dados do dia anterior!");
        if (alert==true){
           $.getJSON("php/truncate_table_movement.php", function(data) {
            }); 

            $.getJSON("php/select_values.php", function(data) {
                var auxresult = data.result;
                $.getJSON("php/update_values.php", 
                {
                    entrance: auxresult,
                    result: 'Utilize o botão fechar caixa'
                },
                function(data){
                }); 
            });
            location.reload();    
        }    
    });
});