// Second Smallest
// You are given 
// 3
//  distinct integers 
// X
// ,
// Y
// ,
//  and 
// Z
// ,
//  and your task is to find and return the second smallest integer among the three provided integers.

// Note: You have to complete findSndSmallest function. No need to take any input.

const findSndSmallest = (X,Y,Z) => {
    if((X > Y && Z > X) || (X < Y && Z < X)){
      return X;
    }
    else if((Y > X && Z > Y) || (Y < X && Z < Y)){
      return Y;
    }
    else{
      return Z;
    }
};
console.log(findSndSmallest(2,9,23));