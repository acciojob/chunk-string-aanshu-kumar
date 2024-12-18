function stringChop(str, size) {
  // your code here
	let len=str.length;
	let upperlimit=size;
	let lowerlimit=0;
	let arr=[];
	if(len<upperlimit)
	arr.push(str);
	while(len>upperlimit)
		{
			arr.push(str.substring(lowerlimit,upperlimit));
			lowerlimit=upperlimit;
			upperlimit=upperlimit+size;
			
		}
	return arr;
}


// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
