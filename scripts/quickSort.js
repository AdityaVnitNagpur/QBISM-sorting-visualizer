// Using 1st element as pivot

// It works on partitioning of array into two halves having smaller elements on left side and greater element on right side recursively.

const quickSort = async (low,high)=>{
    // Partitioning the array
    if(low>=high) return;

    let pos=low;

    for(let i=low+1;i<high;i++){
        showPicked(low, i);
        await wait(2000/n);

        if(Number(document.getElementById(pos).style.height.slice(0,-2)) > Number(document.getElementById(i).style.height.slice(0,-2))){

            tmp=document.getElementById(pos).style.height;
            document.getElementById(pos).style.height = document.getElementById(i).style.height;
            document.getElementById(i).style.height = tmp;

            tmp=document.getElementById(pos+1).style.height;
            document.getElementById(pos+1).style.height = document.getElementById(i).style.height;
            document.getElementById(i).style.height = tmp;
            pos++;
        }

        remPicked(low,i);
    }
    correctPos(pos);
    await quickSort(low,pos);
    await quickSort(pos+1,high);
    // Debugging 

    // let ap=[]
    // for(i=0;i<10;i++){
    //     ap.push(document.getElementById(i).style.height.slice(0,-2));
    // }
    // console.log(ap);
}