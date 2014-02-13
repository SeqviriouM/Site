function animate_header(){

    var manager = new jsAnimManager();
    shroom = document.getElementById("header");
    
    var anim = manager.createAnimObject("header");
    anim.add({property: Prop.top, from:-100, to: 0, duration: 1000}); 

}