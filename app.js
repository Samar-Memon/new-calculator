let displayValue = '';

const putValue = (value) => {
    displayValue += value;
    document.getElementById('screen').value = displayValue;
}


const emptyScreen = () => {
    displayValue = '';
    document.getElementById('screen').value = displayValue;
}


const calc = () => {
    let res;
    try{
        res = Function('"use strict"; return (' + displayValue + ')')();
        document.getElementById('top').innerHTML = `${document.getElementById('screen').value}=`;
        document.getElementById('screen').value = res;
        displayValue = res.toString();
    }catch(error){
        document.getElementById('screen').value = 'Error';
        displayValue = '';
    }
};

document.getElementById('c').addEventListener('click', () => {
    document.getElementById('top').innerHTML = '';
});


const backSpace = () => {
    let  slice =document.getElementById('screen').value.slice(0,-1);
    document.getElementById("screen").value=slice
    if(document.getElementById('screen').value == ''){
        displayValue = '';
        document.getElementById('screen').value = displayValue;
    }
}


document.querySelector('.fa-expand').addEventListener('click', () => {
    document.querySelector('.calculator').classList.toggle('fullScreen');
})


document.querySelector('.open').addEventListener('click', () => {
    document.getElementById('title').style.display = 'none';
    document.querySelector('.calculator').style.display = 'flex';
    document.querySelector('.open').style.display = 'none'
})

document.querySelector('.fa-minus').addEventListener('click', () => {
    document.getElementById('title').style.display = 'block';
    document.querySelector('.calculator').style.display = 'none';
    document.querySelector('.open').style.display = 'flex'  
})

document.querySelector('.fa-xmark').addEventListener('click', () => {
    document.getElementById('title').style.display = 'block';
    document.querySelector('.calculator').style.display = 'none';
    document.querySelector('.open').style.display = 'flex'  
})