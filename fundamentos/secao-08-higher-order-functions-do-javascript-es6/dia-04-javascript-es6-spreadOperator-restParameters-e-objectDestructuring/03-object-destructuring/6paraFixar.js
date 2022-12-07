
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
  
  const userAndJobsInfo = {...user, ...jobInfos};
  console.log(
`Hi, my name is ${userAndJobsInfo.name}, I'm ${userAndJobsInfo.age} years old 
and I'm ${userAndJobsInfo.nationality}. I work as a ${userAndJobsInfo.profession} and my squad 
is ${user.squad}`)
