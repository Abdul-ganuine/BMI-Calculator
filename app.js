let ranges=document.querySelectorAll('.slider');
let weightValueShow=document.querySelector('.weight-val');
let heightValueShow=document.querySelector('.height-val');
let bmiShow=document.querySelector('.bmi-value');
let bmiInfo=document.querySelector('.bmi-info')

let weightValue=20;
let heightValue=100;
let heightInMeters=parseInt(heightValue*0.01);

let bmi=(weightValue/(heightInMeters*heightInMeters)).toFixed(1);
bmiShow.textContent=bmi;

for(let i=0;i<ranges.length;i++){
    ranges[i].addEventListener('input',function(){
        
        if(this.classList.contains('weight')){
            weightValue=parseFloat(ranges[i].value);
            weightValueShow.textContent=weightValue+" kg";
        } else if(this.classList.contains('height')){
            heightValue=parseFloat(ranges[i].value);
            heightInMeters=heightValue*0.01;
            heightValueShow.textContent=heightValue+" cm";
        } 
        bmi=(weightValue/(heightInMeters*heightInMeters)).toFixed(1); 
        bmiShow.textContent=bmi;

        if(bmi<18.5){
            bmiShow.style.color="orange";
            bmiInfo.textContent="Under Weight"
        }else if(bmi>=18.5 && bmi<=24.9){
            bmiShow.style.color="#2ebf75";
            bmiInfo.textContent="Normal Weight"
        }else{
            bmiShow.style.color="red"; 
            bmiInfo.textContent="Obese"
        }
    })
}

