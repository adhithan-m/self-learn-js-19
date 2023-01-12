/*empty=[]
input=parseInt(prompt("enter the size of the array"))
for(i=0;i<input;i++){
a=prompt("Enter The Product Name")
b=prompt("Enter The Product Price")
c=parseInt(prompt("Enter The Product Quantity"))
d=parseInt(prompt("Enter The Description"))

function fun(v){
	empty.push(v)
	
}
fun({name:a,age:b,id:c,qty:d})}
console.log(empty)*/

/*var a=prompt("Enter The Value");//*venkat|?
var b=[]
for(i=0;i<a.length-1;i++)
{
	if(a == "|a-z|")
	{
		a.push(b);        
	}
	console.log(b);
}*/

//1.calculate the program to sum of the n elemnts.

a=[23,19,16,3,2]
b=0
for(i=0;i<a.length-1;i++)
{
 b=b+a[i];
}
console.log(b)

//2.Design a method to calculate the average of n element in a array.

a=[1,2,3]
sum=0
for(i=0;i<=a.length-1;i++)
{
  sum=sum+a[i]

}
 b=sum/a.length
console.log(b)

//3.Design a mehtod to return how many even numbers in the passed arary

a=[1,2,3,4,5,6]
even=[]
for(i=0;i<=a.length-1;i++)
{
	if(a[i]%2==0)
	{
	even.push(a[i])	
	}	
}
//console.log(even)
b=even.length
console.log(b)

//4.Design a mehtod to return how many add numbers in the passed arary

a=[1,2,3,4,5,6,7,11]
odd=[]
for(i=0;i<=a.length-1;i++)
{
	if(a[i]%2!=0)
	{
	odd.push(a[i])
	}
}
//console.log(odd)
b=odd.length
console.log(b)

//5.Design a mehtod to count and display the negative and positive number present in an array.

a=[1,2,-3,-5,-1,6,-8,9]
neg=[]
pos=[]
for(i=0;i<a.length;i++)
{
	if(a[i]>=0)
	{
		pos.push(a[i])
	}
	else
	{
		neg.push(a[i])
	}
}
console.log(neg)
console.log(pos)
console.log("positive count"+pos.length+" "+"negative count"+neg.length+" ")

///6.Design a mehtod to delete the duplicate number from the array.

a=[1,1,2,2,3,4,5,4,3,5,5]
a.sort()
b=[]
//console.log(a)
for(i=0;i<=a.length;i++)
{
	if(a[i]!=a[i+1])
	{
		b.push(a[i])
	}
}
console.log(b)

//7.Design a mehtod to delete the element at a particular index from the array.//not complete

var a=prompt("Enter the index")
b=[1,2,3,4,5,6]
c=[]
delete b[a]
c.push(b)
console.log(c)
console.log(b)

//8.Design a mehtod to count the how many digits in an array()
 
 a=[10,3,4,5,6,7,8,9,12,34,56,78,123,456,679,897]
count=[]
for(i=0;i<a.length;i++)
{
	count++
}
console.log("Element count="+count)

//8.1 design a method to find how many single ,double and triple digit in an array.

 a=[10,3,4,5,6,7,8,9,12,34,56,78,123,456,679,897]
 one=[]
 two=[]
 three=[]
 for(i=0;i<a.length;i++)
 {
	 
 }
 
//9.check how many numbers are divisible by 3,4 and 5.

a=[10,3,4,5,6,7,8,9,12,34,56,78,]
five=0
four=0
three=0
for(i=0;i<a.length-1;i++)
{
	if(a[i]%5==0)
	{
		five++
	}
	if(a[i]%4==0)
	{
		four++
	}
	if(a[i]%3==0)
	{
		three++
	}
}
console.log("five="+five,"four="+four,"three="+three)

//10.Return that how many palindromes are there in an array

a=[1,212,313,4,5,414,676,848,7,8,9]
b=0
c=[]
for(i=0;i<a.length;i++)
{
	rem=a[i]%10
	b=(b*10)+rem
	a[i]=(a[i]-rem)/10
}
console.log("palindrome number is:"+c)


//22.Design a method to sort the element in an array in asscending order
a=[1,423,534,635,6,5,76,8,75,857]
b=[]
a.sort()
b.push(a)
console.log("asscending order="+b)

//23.Design a method to sort the element in an array in descending order

a=[1,423,534,635,6,5,76,8,75,857]
a.sort()
b=[]
for(i=a.length;i>=0;i--)
{
b.push(a[i])	
}
console.log("descending order="+b)

//26.Design a method to find largest number in an array.

a=[1,2,3,4,6,7,9,8]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]>=a[i+1])
	{
		b.push(a[i])
	}
			
}
console.log("Greatest number is:"+b)

//28.Design a emthod to find smallest number in an array.

a=[2,3,4,5,6,7,8,1]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]<=a[i])
	{
		b.push(a[i])
	}
	break
}console.log("smallest no is:"+b)

//.4

a=[1,2,3,4]
b=0
for(i=0;i<a.length-1;i++)
{
	b=b+a[i]
}
average=b/a.length
console.log(average)

//2
a=[100,-4,6,-7,-9,15]
b=[""]
for(i=0;i<a.length;i++)
{
	if(a[i]<0)
	{
		sum=a[i]*-1
		b.push(sum)
	}
}
document.write("<br>")
document.write(b)

//1

a=[1,1,2,2,3,3,4,4]
a.sort()
b=[]
c=[]
for(i=0;i<a.length;i++)
{
	if(a[i]==a[i+1])
	{
		b.push(a[i])
	}
	else
	{
		c.push(a[i])
	}
}
document.write("<br>")
document.write(c)

//3

a=[1,5,2]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]==1)
	{
	c="one"
    b.push(c)	
	}
	if(a[i]==2)
	{
		c="two"
		b.push(c)
	}
	if(a[i]==5)
	{
		c="five"
		b.push(c)
	}
}
document.write("<br>")
document.write(b)

