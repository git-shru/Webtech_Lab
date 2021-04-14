var array_data = [90,23,12,56,3,75]

console.log("Array before Bubble sort");
console.log(array_data);

function bubble(array){

		var i,j,temp=0,swap=0;
		len = array.length;
		for(i=0;i< len;i++)
		{
			for( j=0;j<len-1-i;j++)
			{
		
				if( array[j] > array[j+1] )
				{
					temp=array[j];
					array[j]=array[j+1];
					array[j+1]=temp;
					swap=1;
				}
			}
			if(swap==0)
				break;
		}
		return array;
}
console.log("After Bubble Sort");
console.log(bubble(array_data));

var array_data = [98,34,2,12,59,3]

console.log("Array before insertion sort");
console.log(array_data);

function insertion(data)
	{
		var len = data.length;
		for (var i = 1; i < len; ++i) { 
            var key = data[i]; 
            var j = i - 1; 
  
            while (j >= 0 && data[j] > key) { 
                data[j + 1] = data[j]; 
                j = j - 1; 
            } 
            data[j + 1] = key; 
        } 

        return data;
	}

console.log("After Insertion Sort");
console.log(bubble(array_data));

var array_data = [78,135,22,55,13,67]

console.log("Array before selection sort");
console.log(array_data);


function selection(data)
	{
		var n= data.length;
		for(var i=0;i<n-1;i++)
		{
			var min=i;
			for(var j=i+1;j<n;j++)
			{
				if(data[j]<data[min])
				{
					min=j;
				}
			}
			
				var t= data[min];
				data[min] = data[i];
				data[i] = t;
				
		}
	}

console.log("After Selection Sort");
console.log(bubble(array_data));