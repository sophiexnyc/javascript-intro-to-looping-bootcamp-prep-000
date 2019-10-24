function forLoop (array)
{
  for (let i=0; i<25;i++)
  {
    //
    if(i === 0)
    {
      array[i]= "I am 1 strange loop.";
    }
    else if ()
    {
      array[i+1]= "I am ${i} strange loops.";
    }
  }
  return array;
}

function whileLoop(n)
{
  while (n>0)
  {
    n=n-1
    console.log(n);
  }
  return 'done';
}

function doWhileLoop(num)
{
  do
  {
    num=num-1;
    console.log ("I run once regardless.");
  } while(num>0);
}
