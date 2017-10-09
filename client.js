console.log('js sourced.');

$(document).ready(readyNow);

function readyNow(){
  clickHandler();

}
function clickHandler() {
  $("#submitNow").on('click', recordNow);
  $('#submitNow').on('click', clearText);


}
var employeeArray ={};
function recordNow(){
  var firstName = $('#nameField').val();
  var lastName = $('#lastNameField').val();
  var annualSalary = $('#salaryField').val();
  var employeeID = $('#employeeIDField').val();
  var jobTitle  =$('#jobTitleField').val();
  var monthlyCost = Math.round(($('#salaryField').val()/12));

  $(".answers").append("<p>" + firstName + "</p>");
  console.log(firstName);

  $(".answers").append("<p>" + lastName + "</p>");
  console.log(lastName);

  $(".answers").append("<p>" + employeeID + "</p>");
  console.log(employeeID);
  $('answers').append("<p>" + jobTitle + "</p>");

  $(".answers").append("<p>" + annualSalary + "</p>");
  console.log(annualSalary);

  $(".answers").append('<p>' + 'Monthly cost:', monthlyCost + '</p>')
  console.log(monthlyCost);
}

function clearText() {
  $('#nameField').val('');
  $('#lastNameField').val('');
  $('#salaryField').val('');
  $('#employeeIDField').val('');
  $('#jobTitleField').val('');

}
