$(document).ready(function(){

  var max1 = 1;
  var max2 = 1;
  var max3 = 1;

  index1 = Math.round(Math.random() * max1);
  index2 = Math.round(Math.random() * max2);
  index3 = Math.round(Math.random() * max3);

  // todo: drop array data into _data yaml for Jekyll to consume.
  array1 = new Array("Awesome","Annoying");
  array2 = new Array("Black","Yellow");
  array3 = new Array("Anacondas","Attackers");

  function generateName() {
    index1 = Math.round(Math.random() * max1);
    index2 = Math.round(Math.random() * max2);
    index3 = Math.round(Math.random() * max3);
    return array1[index1] + array2[index2] + array3[index3];
  }

  console.log(generateName());
});


