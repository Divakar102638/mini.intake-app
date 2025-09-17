const form = document.getElementById('buyerForm');
const tableBody = document.querySelector('#buyersTable tbody');
const propertyType = document.getElementById('propertyType');
const bhkLabel = document.getElementById('bhkLabel');

// Show/hide BHK based on property type
propertyType.addEventListener('change', () => {
  bhkLabel.style.display = ['Apartment', 'Villa'].includes(propertyType.value) ? 'block' : 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  // Budget validation
  if (data.budgetMin && data.budgetMax && Number(data.budgetMax) < Number(data.budgetMin)) {
    alert("Budget Max must be ≥ Budget Min");
    return;
  }

  // Add row to table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data.fullName}</td>
    <td>${data.phone}</td>
    <td>${data.city}</td>
    <td>${data.propertyType}${data.bhk ? " (" + data.bhk + " BHK)" : ""}</td>
    <td>${data.budgetMin || ''} – ${data.budgetMax || ''}</td>
    <td>${data.timeline}</td>
    <td>New</td>
  `;
  tableBody.appendChild(row);

  // Reset form
  form.reset();
  bhkLabel.style.display = 'none';
});
