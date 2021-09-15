// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const _compareC = (al, bl, c)=>{
    if(al!==bl) return false;
    if(!Number.isFinite(c)) throw new Error("c");
    return al === (c%10);
  }
  
  const _compareWith = (al,b,c)=>{
    if(!Number.isFinite(b)) throw new Error("b");
    return _compareC(al,b%10,c);
  }
  
  const checkNum = (a,b,c) =>{
    if(!Number.isFinite(a)) throw new Error("a");
    return _compareWith(a%10,b,c);
  }