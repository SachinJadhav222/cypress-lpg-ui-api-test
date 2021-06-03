let obj = {};
const printTableUsingHash=(table)=>{
    table.forEach((q) => {
        obj[q.parameter] = q.value;
      });
      console.log(obj);
      cy.log(obj);
}
module.exports={
    printTableUsingHash
}
  