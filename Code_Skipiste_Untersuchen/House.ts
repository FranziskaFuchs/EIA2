namespace L11_Skipiste {
    export class House {

        position: Vector;

        constructor() {
            this.position = new Vector(200, 450);
        }


        draw(): void {
             
            //Hütte
             crc2.beginPath();
             crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
     
             let gradient: CanvasGradient = crc2.createLinearGradient(0, 50, 0, 390);
             crc2.fillStyle = gradient;
     
             crc2.fillStyle = "#5c4411";
             crc2.fill();
             crc2.save();
     
             //Fenster
             
             crc2.fillStyle = "#d3e6e6";
             crc2.fillRect(225, 475 , 100, 60);
             crc2.save();
 
             crc2.fillStyle = "black";
             crc2.font = "10px sans-serif";
             crc2.fillText("KASSE SKI LIFT", 230, 485);
             crc2.fillText("Tagesticket 20€", 230, 500);
             crc2.fillText("Skipass 3 Tage 100€", 230, 510);
             
             //Dach
     
             crc2.beginPath();
             crc2.moveTo(200, 450); 
             crc2.lineTo(275, 400); 
             crc2.lineTo(350, 450); 
             crc2.stroke();
             crc2.closePath();
     
             crc2.lineWidth = 15;
             crc2.lineCap = "round";
             crc2.strokeStyle = "#d3e6e6";
             crc2.stroke();
     
             crc2.fillStyle = "white";
             crc2.fill();
     
             crc2.save();  
             crc2.restore(); 
 
             //Eiszapfen groß
 
             crc2.beginPath();
             crc2.moveTo(205, 456);
             crc2.lineTo(210, 525);
             crc2.lineTo(215, 456);
             crc2.lineWidth = 2;
 
             crc2.stroke();
             crc2.closePath();
     
             crc2.fillStyle = "white";
             crc2.fill();
 
              //Eiszapfen klein
 
             crc2.beginPath();
             crc2.moveTo(220, 456);
             crc2.lineTo(222, 500);
             crc2.lineTo(225, 456);
             crc2.lineWidth = 2;
  
             crc2.stroke();
             crc2.closePath();
      
             crc2.fillStyle = "white";
             crc2.fill();
 
             //Eiszapfen klein rechts
 
             crc2.beginPath();
             crc2.moveTo(330, 456);
             crc2.lineTo(333, 500);
             crc2.lineTo(336, 456);
             crc2.lineWidth = 2;
   
             crc2.stroke();
             crc2.closePath();
       
             crc2.fillStyle = "white";
             crc2.fill();
 
             //Schneehaufen an der Hütte
 
             crc2.beginPath();
             crc2.arc(355, 600, 15, 0, 2 * Math.PI);
             crc2.arc(325, 600, 15, 0, 2 * Math.PI);
             crc2.arc(300, 600, 15, 0, 2 * Math.PI);
             crc2.arc(290, 600, 15, 0, 2 * Math.PI);
             crc2.arc(275, 600, 15, 0, 2 * Math.PI);
             crc2.arc(255, 600, 15, 0, 2 * Math.PI);
             crc2.arc(235, 600, 15, 0, 2 * Math.PI);
             crc2.arc(217, 600, 15, 0, 2 * Math.PI);
             crc2.arc(200, 600, 15, 0, 2 * Math.PI);
             crc2.closePath();
             crc2.fillStyle = "white";
             crc2.fill();
 
             crc2.restore();

            
        }
    }
}