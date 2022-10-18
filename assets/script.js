
// V1.1
 
const holderForTerminal = document.getElementById("terminal");

// there are two hidden easter in this code 
//if you find it then tweet and tag me @thelearn_tech

function populateBanner(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('banner').textContent = this.responseText;
        document.getElementById('banner').id = "bannerUsed"; // changing id so not to conflict with new banner    

    };
    xhr.open('GET', url);
    xhr.send();
}

// show banner
populateBanner('https://raw.githubusercontent.com/thelearn-tech/web-terminal/main/assets/banner.txt');




function validate(e) {
   var command = document.getElementById("command");
   
      if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
         e.preventDefault();
         command.value = command.value.toLowerCase(); // convert text to lower case
         run(command.value);
      } else if (e.keyCode === 13) { // cheeck if the enter key is pressed for mobile
         e.preventDefault();
         command.value = command.value.toLowerCase(); // convert text to lower case
         run(command.value);
      }
}

function keyListner(status) {

 var command = document.getElementById("command");

 if (status) {
   // add event listner
   
   command.addEventListener("keydown", validate);

 } else if (status == false) {
   // remove eventListner
   command.removeEventListener("keydown", validate);
 }

}



// adding eventListner 
keyListner(true);

function cleanupAndNew(command) {
   keyListner(false); // removing eventListner

   removeInputBox(); // removing input
   replaceInputBoxByText(command) // replacing input element by text

   newPrompt(); // 
   
   keyListner(true);
}

function showHelp() {
   var br = document.createElement("br");
      var text;
      
      var p0 = document.createElement("p") 
      var p1 = document.createElement("p"); 
      var p2 = document.createElement("p");
      var p3 = document.createElement("p");
      var p4 = document.createElement("p"); 
      var p5 = document.createElement("p");
      var p6 = document.createElement("p");
      var p7 = document.createElement("p"); 
      var p8 = document.createElement("p");
      var p9 = document.createElement("p");
      var p10 = document.createElement("p");
      var p11 = document.createElement("p");

      
      // commands
      text = document.createTextNode("COMMANDS:");
      p0.appendChild(text);
      p0.setAttribute("class", "greenFont")
      holderForTerminal.appendChild(p0);

      // ls
      p1.setAttribute("class", "commandList");
      p1.appendChild(document.createTextNode("ls ---> List Files in the Directory"));
      
      
      // cat
      p2.setAttribute("class", "commandList");
      p2.appendChild(document.createTextNode("cat ---> cat is cat"));


      //pwd
      p3.setAttribute("class", "commandList");
      p3.appendChild(document.createTextNode("pwd ---> Post Working Directory"));

      
      //date
      p4.setAttribute("class", "commandList");
      p4.appendChild(document.createTextNode("date ---> shows date and time"));


      //clear
      p5.setAttribute("class", "commandList");
      p5.appendChild(document.createTextNode("clear ---> clears screen"));

      //whoami
      p6.setAttribute("class", "commandList");
      p6.appendChild(document.createTextNode("whoami --- shows current logged user"));

      //banner
      p7.setAttribute("class", "commandList");
      p7.appendChild(document.createTextNode("banner ---> shows banner"));

      //ifconfig
      p8.setAttribute("class", "commandList");
      p8.appendChild(document.createTextNode("ifconfig ---> ifconfig is ifconfig"));
      
      //hacker-theme
      p9.setAttribute("class", "commandList");
      p9.appendChild(document.createTextNode("repo ---> takes you to the repository of this project"));

      //website 
      p10.setAttribute("class", "commandList");
      p10.appendChild(document.createTextNode("website ---> takes you to website"));

      //hacker-theme
      p11.setAttribute("class", "commandList");
      p11.appendChild(document.createTextNode("hacker-theme ---> takes you to hacker-theme site"));

            
      holderForTerminal.appendChild(p0)
      holderForTerminal.appendChild(p1);
      holderForTerminal.appendChild(p2);
      holderForTerminal.appendChild(p3);
      holderForTerminal.appendChild(p4);
      holderForTerminal.appendChild(p5);
      holderForTerminal.appendChild(p6);
      holderForTerminal.appendChild(p7);
      holderForTerminal.appendChild(p8);
      holderForTerminal.appendChild(p9);
      holderForTerminal.appendChild(p10);
      holderForTerminal.appendChild(p11);

}

function showBanner() {
   var p = document.createElement("p");
   var pre = document.createElement("pre")
   pre.setAttribute("id", "banner");
   p.appendChild(pre);
   holderForTerminal.appendChild(p);
   
   var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('banner').textContent = this.responseText;
        document.getElementById('banner').id = "bannerUsed"; // changing id so not to conflict with new banner    

    };
    xhr.open('GET', "https://raw.githubusercontent.com/thelearn-tech/web-terminal/main/assets/banner.txt");
    xhr.send();

   
}


function run(command) {
   
   
   if (command == "help") {
      showHelp();

      
   } else if (command == "ls") {

      var p = document.createElement('p');
      p.setAttribute("class", "greenFont");
      p.appendChild(document.createTextNode("social_media.txt"));
      holderForTerminal.appendChild(p);

   } else if (command == "cat") {

      var p = document.createElement('p');
      p.setAttribute("class", "greenFont")
      p.appendChild(document.createTextNode("cat: require's extra argument <file name>"));
      holderForTerminal.appendChild(p);

   } else if (command == "cat social_media.txt") {
      var p1 = document.createElement('p')
      var p2 = document.createElement('p')
      var p3 = document.createElement('p')
      var p4 = document.createElement('p')

      

      p1.setAttribute("class", "greenFont");
      p2.setAttribute("class", "greenFont");
      p3.setAttribute("class", "greenFont");
      p4.setAttribute("class", "greenFont");

      p1.appendChild(document.createTextNode("https://github.com/thelearn-tech"));
      p2.appendChild(document.createTextNode("https://tweeter.com/thelearn_tech"));
      p3.appendChild(document.createTextNode("https://instagram.com/thelearn_tech"));
      p4.appendChild(document.createTextNode("Mail : pb.thelearn.tech@gmail.com"));

      holderForTerminal.appendChild(p1);
      holderForTerminal.appendChild(p2);
      holderForTerminal.appendChild(p3);
      holderForTerminal.appendChild(p4);

   } else if (command == "pwd") {
      var p = document.createElement("p");
      p.appendChild(document.createTextNode("/home/visitor/"));
      p.setAttribute("class", "greenFont");

      holderForTerminal.appendChild(p);

   } else if (command == "date") {
      const d = new Date();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      var p = document.createElement("p");
      p.setAttribute("class", "greenFont");

      if (days[d.getDay()] == "Friday") {
         var pFriday = document.createElement("p");
         var t = document.createElement("t");
         var dateTime = " " + d.getDate() + " " + (months[d.getMonth()]) + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
   
         t.setAttribute("class", "fFont");
         
         t.appendChild(document.createTextNode(days[d.getDay()]));
         p.appendChild(t);
         p.appendChild(document.createTextNode(dateTime))

         pFriday.setAttribute("class", "fFont");
         pFriday.appendChild(document.createTextNode("Its's Friday again then Saturday,Sunday what!!"));

         holderForTerminal.appendChild(p);
         holderForTerminal.appendChild(pFriday)
      } else {
         var dateTime = days[d.getDay()] + " " + d.getDate() + " " + (months[d.getMonth()]) + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
         p.appendChild(document.createTextNode(dateTime))
         holderForTerminal.appendChild(p)
      }
         
      
   } else if (command == "clear") {
      holderForTerminal.innerHTML = " ";
       
      newPrompt(); 
      keyListner(true);

   } else if (command == "whoami") {
      var p = document.createElement("p");

      p.setAttribute("class", "greenFont");
      p.appendChild(document.createTextNode("visitor"));
      holderForTerminal.appendChild(p);

   } else if (command == "banner") {
      showBanner();


   } else if (command == "ifconfig") {
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      var p3 = document.createElement("p");
      var p4 = document.createElement("p");

      var p5 = document.createElement("p");
      var p6 = document.createElement("p");
      var p7 = document.createElement("p");
      var p8 = document.createElement("p");

      p1.setAttribute("class", "greenFont");

      p2.setAttribute("class", "wlan0Details");
      p3.setAttribute("class", "wlan0Details");
      p4.setAttribute("class", "wlan0Details");

      p1.appendChild(document.createTextNode("lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536"));
      p2.appendChild(document.createTextNode("inet 127.0.0.1  netmask 255.0.0.0"));
      p3.appendChild(document.createTextNode("inet6 ::1  prefixlen 128  scopeid 0x10<host>"));
      p4.appendChild(document.createTextNode("loop  txqueuelen 1000  (Local Loopback)"));


      p5.setAttribute("class", "greenFont");

      p6.setAttribute("class", "wlan0Details");
      p7.setAttribute("class", "wlan0Details");
      p8.setAttribute("class", "wlan0Details");

      p5.appendChild(document.createTextNode("wlo1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500"));
      p6.appendChild(document.createTextNode("inet 192.168.69.69  netmask 255.255.255.0  broadcast 192.168.43.255"));
      p7.appendChild(document.createTextNode("inet6 2309:4080:377:7dc1:2ca2:c8b2:aa62:2266  prefixlen 64  scopeid 0x0<global>"));
      p8.appendChild(document.createTextNode("inet6 fe80::e630:9270:b1e0:7800  prefixlen 64  scopeid 0x20<link>"));
      

      holderForTerminal.appendChild(p1);
      holderForTerminal.appendChild(p2);
      holderForTerminal.appendChild(p3);
      holderForTerminal.appendChild(p4);
      holderForTerminal.appendChild(p5);
      holderForTerminal.appendChild(p6);
      holderForTerminal.appendChild(p7);
      holderForTerminal.appendChild(p8);
   } else if (command == "website") {
      window.open("https://thelearn-tech.github.io/", "_self");
   } else if (command == "hacker-theme") {
       window.open("https://thelearn-tech.github.io/hacker-theme", "_self");

   } else if (command == "repo") {
       window.open("https://github.com/thelearn-tech/web-terminal", "_self");
   } else if (command == "reload") {
       location.reload();
   } else {
      commandNotFound(command);
   }
   
   if (command != "clear") {
      // if the command  is not clear then cleanup and New prompt
      cleanupAndNew(command);
   } 
   
   
   
 }



 function removeInputBox() {

   const terminalPrompt = document.getElementById("terminalPrompt");
   const command = document.getElementById("command");
	
 	terminalPrompt.removeChild(command);
 }

 function replaceInputBoxByText(command) {
   var terminalPrompt = document.getElementById("terminalPrompt")
   var t = document.createElement("t");

   t.classList.add("command_replace");
   t.appendChild(document.createTextNode(command));

   terminalPrompt.appendChild(t);
   // changing the id of the previous terminalPrompt so not to collide with the new terminalPrompt
   terminalPrompt.id = "wasted";
 }

 function newPrompt() {
 	
   var p = document.createElement("p");
 	var input = document.createElement("input");

 
	var t1 = document.createElement('t');
	var t2 = document.createElement('t');
	var t3 = document.createElement('t');
	var t4 = document.createElement('t');
	var t5 = document.createElement('t');
   var t6 = document.createElement('t');
   var t7 = document.createElement('t');
    
    var symbol1 = document.createTextNode("[");
    var userName = document.createTextNode("visitor");
    var symbol2 = document.createTextNode("@");
    var machineName = document.createTextNode("web-terminal");
    var symbol3 = document.createTextNode("]-[");
    var directory = document.createTextNode("~");
    var symbol4 = document.createTextNode("] ");

    t1.classList.add("symbol");
    t2.classList.add("userName");
    t3.classList.add("symbol");
    t4.classList.add("machineName");
    t5.classList.add("symbol");
    t6.classList.add("directory")
    t7.classList.add("symbol")
    
    p.setAttribute('id', 'terminalPrompt');

    input.setAttribute('type', 'text');
    input.setAttribute('id','command');
    
     
    t1.appendChild(symbol1);
    t2.appendChild(userName);
    t3.appendChild(symbol2);
    t4.appendChild(machineName);
    t5.appendChild(symbol3);
    t6.appendChild(directory);
    t7.appendChild(symbol4);

    p.appendChild(t1);
    p.appendChild(t2);
    p.appendChild(t3);
    p.appendChild(t4);
    p.appendChild(t5);
    p.appendChild(t6);
    p.appendChild(t7);
    p.appendChild(input);

    holderForTerminal.appendChild(p);
    document.getElementById("command").focus();
 }

 

function commandNotFound(command) {
   var p = document.createElement("p");
   var t1 = document.createElement("t");
   var t2 = document.createElement("t");
   var t3 = document.createElement("t");

   p.setAttribute("class", "greenFont");
   t2.setAttribute("class", "redFont")

   t1.appendChild(document.createTextNode("websh: "));
   t2.appendChild(document.createTextNode(command));
   t3.appendChild(document.createTextNode(": command not found"));

   
   p.appendChild(t1);
   p.appendChild(t2);
   p.appendChild(t3)
   holderForTerminal.appendChild(p);

 }
