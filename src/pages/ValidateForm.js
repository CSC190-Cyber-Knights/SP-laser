function validateEmail(emailString) {
  const regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ //regex holds what is allowed or not for emails
  const result = emailString.replace(/\s/g, '').split(/,|;/) //puts emailstring into a readable format to test
  //   alert("val email")
  for (let i = 0; i < result.length; i++) {
    //run through each letter
    if (!regex.test(result[i]) || !emailString) {
      //if email doesnt follow what set in regex, sends alert and return false email
      //alert('Invalid email')
      validForm = false
      return false
    }
  }
  return true
}
function validateName(nameString) {
  //       alert("val name")
  if (!/^[a-zA-Z]*$/g.test(nameString) || !nameString) {
    //test if name doesn't follow upper or lower case letters, alerts and returns false
    //alert('Invalid character in name')
    validForm = false
    return false
  } else {
    return true
  }
}
function validatePhoneNumber(input_str) {
  //          alert("val pn")
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im //regex holds numbers and certain special characters that one would use in emails; (, ), and -
  if (regex.test(input_str)) {
    return true
  } else {
    //alert('Invalid phone number')
    validForm = false
    return false
  }
}
function validateDescription(input_str) {
  if (!input_str) {
    //alert('Invalid empty description')
    validForm = false
    return false
  } else {
    return true
  }
}
//function validateFile(input_str) {
// if (document.getElementById('file').files.length === 0) {
//   alert('Invalid empty file upload')
//   validForm = false
//   return false
// } else {
//   return true
// }
//}
const validateEmails = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}
