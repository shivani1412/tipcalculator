const tipcalcy = () =>{
    let amount  = document.getElementById('billamount').value;
    let perc = document.getElementById('tipperc').value;
    let tip = perc * (amount/100);
    let total = tip + Number(amount);
    document.getElementById('tipamount').value = tip;
    document.getElementById('totalbilled').value = total;
}