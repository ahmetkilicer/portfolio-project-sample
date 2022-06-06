
          $("#buton").click(function(){
              var konsept = $("#konsept").val();
              var panel = $("#panel").val();
              var tasarim = $("#tasarim").val();
          

          //Consept Prices

          if(konsept=="kurumsal"){
              a=2000;
          }else if(konsept=="blog"){
              a=1000;
          }else if(konsept=="haber"){
              a=2000;
          }else if(konsept== "eticaret"){
              a=3000;
          }

          //Admin panel

          if(panel=="var"){
              b=500;
          }else if(panel=="yok"){
              b=200;
          }

          //Design
          if(tasarim=="evet"){
              c=750;
          }else if(tasarim=="hayir"){
              c=100;
          }
          toplam=a+b+c;
         $("#sonuc").html("You will pay " + toplam + " $.");






        })