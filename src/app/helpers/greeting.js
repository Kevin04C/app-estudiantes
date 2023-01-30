export const getGreeting = () => {
  let greeting;
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 12) {
    greeting = 'Buenos Días';
  }

  if (hours >= 12 && hours < 18) {
    greeting = 'Buenas Tardes';
  }

  if (hours >= 18 && hours < 24) {
    greeting = 'Buenas Noches';
  }

  return greeting;
};
