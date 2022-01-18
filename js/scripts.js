//business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

 // userinterface logic

 $(document).ready(function(){
     $('form#new-contact').submit(function(event){
         event.preventDefault();
         let inputtedfirstName = $('input#new-first-name').val();
         let inputtedLastName = $('input#new-last-name').val();


     })
 })