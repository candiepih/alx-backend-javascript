import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = await signUpUser(firstName, lastName).then((user) => ({
    status: 'fulfilled',
    value: user,
  }));
  const p2 = await uploadPhoto(fileName).catch((err) => ({
    status: 'rejected',
    value: err.toString(),
  }));

  return Promise.resolve([p1, p2]);
}
