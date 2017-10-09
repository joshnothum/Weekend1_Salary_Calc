console.log('js sourced.');

$(document).ready(readyNow);

function readyNow(){
  clickHandler();

}
function clickHandler() {
  $("#submitNow").on('click', recordNow);
  $('#submitNow').on('click', clearText);
  $('#submitNow').on('click', addItUp);

}

var employeeArray =[];
var monthlyCost;

function recordNow(){
  var firstName = $('#nameField').val();
  var lastName = $('#lastNameField').val();
  var annualSalary = $('#salaryField').val();
  var employeeID = $('#employeeIDField').val();
  var jobTitle  =$('#jobTitleField').val();
  var monthlyCost= (annualSalary)/12;

  $(".answers").append("<p>" + firstName + "</p>");
  console.log(firstName);

  $(".answers").append("<p>" + lastName + "</p>");
  console.log(lastName);

  $(".answers").append("<p>" + employeeID + "</p>");
  console.log(employeeID);
  $('answers').append("<p>" + jobTitle + "</p>");

  $(".answers").append("<p>" + annualSalary + "</p>");
  employeeArray.push(monthlyCost);
  console.log(annualSalary);

  $(".answers").append('<p>' + 'Monthly cost:', monthlyCost + '</p>')
  console.log(monthlyCost);

  return employeeArray
  console.log(employeeArray);

}

function clearText() {
  $('#nameField').val('');
  $('#lastNameField').val('');
  $('#salaryField').val('');
  $('#employeeIDField').val('');
  $('#jobTitleField').val('');

}

function addItUp(employeeArray) {
  for(i=0; i< employeeArray.length; i++ )
  monthlyCost=monthlyCost+monthlyCost;
  employeeArray.push(monthlyCost);
  return monthlyCost

}
console.log(monthlyCost);
console.log(employeeArray);
