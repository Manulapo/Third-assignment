(function (){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            function byeSpeaker (name) {
                console.log("Goodbye " + name)
            }   
            byeSpeaker(names[i]);
        
        } else {
            function helloSpeaker (name){
                console.log("Hello " + name)
            }
            helloSpeaker(names[i]);   
        }
    }
    
})();

