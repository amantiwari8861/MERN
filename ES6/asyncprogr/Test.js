setTimeout(() => {
    console.log("varun is coming to institute");
    setTimeout(() => {
        console.log("varun is having teas in between");
        setTimeout(() => {
            console.log("varun finally came to institute");//taking 13 sec. to complete this individual task
        }, 13000);
    }, 4000);
}, 1000);


