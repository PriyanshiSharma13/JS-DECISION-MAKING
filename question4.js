// Find Relation
// PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.The relationships between integers X and Yare as follows:
// if X>Y, it means Xis greater than Y
// if X<Y, it means X is smaller than Y
// if X=Y, it means Xis equal to Y
// Note: You have to complete findRelationship function. No need to take any input.

const findRelation = (X,Y) => {
    if(X < Y){
      return (X +" is smaller than "+ Y);
    }
    else if(X == Y){
      return (X +" is equal to "+ Y);
    }
    else{
      return (X +" is greater than "+ Y);
    }
  };
  console.log(findRelation(3,11));

