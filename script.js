(function (){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            function byeSpeaker () {
                var bye = "Goodbye"
                console.log( bye + " " + names[i])
            }   
            console.log(byeSpeaker(names[i]));
        
        } else {
            function helloSpeaker (){
                var hello = "Hello"
                console.log( hello + " " + names[i])
            }
            console.log(helloSpeaker(names[i]));   
        }
    }
    
})();
