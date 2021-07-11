var image = [
    "https://th.bing.com/th/id/OIP.yAbAN_FUSBYwZXkb-HJBjQHaNk?pid=ImgDet&rs=1",
      "https://cdn2.vectorstock.com/i/1000x1000/45/76/cute-grandmother-cartoon-vector-17814576.jpg",
      "https://www.netclipart.com/pp/m/100-1004279_cool-indian-dad-png-father-clipart-png.png",
    "https://th.bing.com/th/id/OIP.bLfLP5xwyqow4s05fYH2CwHaNa?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.FEBYFJawbDaIWc2n7HKO2gHaHa?pid=ImgDet&rs=1"
    ];
    
    var reason = [
      "Head of the Family - Grandfather",
      "Family Story Teller - Grandmother",
      "Hardworking Father",
      "Helpful and Gorgeous Mother",
      "Sweet and Adorable Me"
    ];
    
    var i = 0;
    
    function next(){
     document.getElementById ("reason").innerHTML=reason[i]
      document.getElementById("trees").src=image[i]
      i++
    };
    
    
    