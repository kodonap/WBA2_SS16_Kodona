var fs = require ('fs');
var chalk = require ('chalk');

var content;
fs.readFile(__dirname+"/wolkenkratzer.json",function read(err , data) {

if (err) {
	throw err;
	}

content = JSON.parse(data); // Der Variabel content werden die ausgelesenen Informationen der Datei hinzugewiesen.
			   // Das Parse sorgt dafür, das die Informationen der Datei zu einem Objekt umgewandelt werden.


content.wolkenkratzer.sort(function(a,b) {

if(a.hoehe < b.hoehe) return 1;

if(a.hoehe > b.hoehe) return -1;

else return 0;

});


fs.writeFile(__dirname+"/wolkenkratzer_sortiert.json",JSON.stringify(content),function(err) {

if (err) throw err;

for(i = 0; i < content.wolkenkratzer.length; i++) // Die For-Schleife dient hier zur strukturierten Ausgabe des Objektes.
{
        console.log("\nName: "+chalk.red(content.wolkenkratzer[i].name));               // Beispiel:  Name : Burj Khalifa
	console.log("Stadt: "+chalk.cyan(content.wolkenkratzer[i].stadt));              //            Stadt: Dubai
	console.log("Höhe: "+chalk.green(content.wolkenkratzer[i].hoehe));	        //	      Höhe : 828
	console.log("\n--------------------------------------");			//	      --------------------
}


});
});


