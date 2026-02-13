import { FormData } from '../contact/page';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Explicitly set content type
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log('Response status:', res.status);
      return res.json();
    })
    .then((response) => {
      console.log('Server response:', response);
      alert(response.message);
    })
    .catch((err) => {
      console.error('Full error:', err);
      alert('Error sending email');
    });
}