import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  const results = await Promise.allSettled([p1, p2]);
  const [user, photo] = results;
  if (photo.status === 'rejected') {
    photo.value = photo.reason.message;
    delete photo.reason;
  }
  const data = [user, photo];
  console.log(data);
}

export default handleProfileSignup;
