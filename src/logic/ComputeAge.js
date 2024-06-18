export function ComputeAge(fechaNac) {
  // Convert the birthdate into a Date object
  let birthDate = new Date(fechaNac);

  // Get the current date
  let today = new Date();

  // Calculate the difference in years
  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has already passed this year
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
