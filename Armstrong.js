
    let sum =0;
    let num=153;
    let temp=num;
    while(temp>0)
        {
            let remainder=temp % 10;
            sum += remainder * remainder * remainder;
            temp = parseInt(temp/10)
        }
        if(sum == num)
            {
                console.log("its armstrong number")
            }
            else{
                console.log("its not armstrong number")
            }