
function kilometerToMeter(kilometer){
    if (kilometer >= 0){
        // 1 kilometer = 1000 meter
        return kilometer * 1000;
    }
    else{
        return "Please enter the valide value!!!"
    }
}


// budgetCalculator function
function budgetCalculator(NumOfWatch,NumOfMobile, NumOfLeptop){
    //  1 watch = 50 and 1 Mobile = 100 and 1 Leptop = 500
    if (NumOfWatch >= 0 && NumOfMobile >= 0 && NumOfLeptop >= 0){ 
        var totalCost = NumOfWatch*50 + NumOfMobile*100 + NumOfLeptop*500;  // totalCost Count
        return totalCost   
    }
    else{
        return "Please enter the valide value!!!"
    }    
}


// hotelCost function
function hotelCost(Days){
    totalRent = 0;
    if ( Days > 0 ){
        for(i=1; i<=Days;i++){
            if (i<=10){
                totalRent=totalRent+100; // From 1 to 10 days = 100tk per day
            }
            else if(i>=11 && i<=20){
                totalRent = totalRent + 80; // From 11 to 20 days = 80tk bacause 20% discount
            }
            else{
                totalRent = totalRent + 50; // From 21 to all days = 50 tk because 50% discount
            }
        }
        return totalRent;
    }
    else{
        return "Please enter the valide value!!!";
    }
    
}




// megaFriend function
function megaFriend(NameArray){
    let AllNameLength = []; // initialize empty string
    if (NameArray.length>0){
        for (i=0;i<NameArray.length;i++){
            if (typeof NameArray[i] == 'string'){
                var Length = NameArray[i].length; // length count for each name
                AllNameLength.push(Length) // store the length value
            }
        }
    }
    else{
        return "Please enter the valide value!!!";
    }
    return Math.max.apply(Math,AllNameLength);
}
