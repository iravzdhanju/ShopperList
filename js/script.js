function $(ele) {
    return document.querySelector(ele);
  }
  
  function $$(ele) {
    return document.getElementById(ele);
  }

function save(){
    var new_data = document.getElementById('input').value;

    if(localStorage.getItem('data') == null){
        localStorage.setItem('data','[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);


    localStorage.setItem('data', JSON.stringify(old_data));
    
    
}
    

function view(){
    if(localStorage.getItem('data') != null){
        document.getElementById('text').innerHTML = "Your Items"
        document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('data'));
        document.getElementById('containers').style.display = "block";
        
    }
}





var colors = ['#760CE8', '#4782B1', '#E8890C', '#EF6C00', '#764ba2'];

var changeBackground = function () {
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
};

changeBackground();
    