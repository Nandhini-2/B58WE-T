function count10(callback) {setTimeout(() => {
    document.getElementById("display").innerText = "10";
    callback();
  }, 1000);
}

function count9(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "9";
        callback()}, 1000);
}

function count8(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "8";
        callback()}, 1000);
}


function count7(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "7";
        callback()}, 1000);
}


function count6(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "6";
        callback()}, 1000);
}

function count5(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "5";
        callback()}, 1000);
}

function count4(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "4";
        callback()}, 1000);
}

function count3(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "3";
        callback()}, 1000);
}

function count2(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "2";
        callback()}, 1000);
}

function count1(callback) {
    setTimeout(() => {
        document.getElementById("display").innerText = "1";
        callback()}, 1000);
}


  
function Message (callback){setTimeout(() => {
        document.getElementById("display").innerText = "Happy Independance Day";
        callback()}, 1000);
}


count10(function(){
    count9(function(){
        count8(function(){
            count7(function(){
                count6(function(){
                    count5(function(){
                        count4(function(){
                            count4(function(){
                                count3(function(){
                                    count2(function(){
                                        count1(function(){
                                            Message(function(){
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })    
        });
    });
});