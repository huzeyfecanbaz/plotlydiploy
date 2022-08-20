d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(d3.selectAll("#menu").node().id);


  console.log(dropdownMenuID);
  console.log(selectedOption);
};