function buyMilk(){
    console.log('Going to the shop');

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const msg = 'Going to home';
            resolve(msg);
        }, 5000);
    });
    
}

function makeChocolate(){
    console.log('Making chocolate...');
}

function prepareChocolate(){
    buyMilk().then(() => {
        makeChocolate();
    }).catch((mensagem) => console.log(mensagem));
}

async function prepareChocolateAsync(){
    try{
        const returno = await buyMilk();
        console.log(returno);
        makeChocolate();
    } catch(error){
        console.log(error);
    }
    
    console.log('Script finished');
}


// prepareChocolate();
prepareChocolateAsync();
 
