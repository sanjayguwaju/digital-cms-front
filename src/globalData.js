import fetch from 'node-fetch';

export async function getGlobalData() {
  try {
    const response = await fetch('http://localhost:5000/api/hero?locale=undefined&draft=false&depth=1');
    const data = await response.json();
    return data.docs[0]; // Assuming you only have one hero document
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      title: 'Error',
      description: 'Unable to fetch data',
      primaryButton: {
        text: 'Read More',
        link: '#'
      },
      secondaryButton: {
        text: 'Contact Us',
        link: '#'
      },
      image: { url: '' }
    };
  }
}
