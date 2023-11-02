import * as faker from 'faker';

interface generateDataInterface{
    title:string;
    description:string;
}

export const generateData = (numNotes:number) => {
  const notes:generateDataInterface[] = [];

  for (let i = 0; i < numNotes; i++) {
    let title:string = faker.lorem.words(3); // Generate a random title
    let description:string = faker.lorem.paragraph(); // Generate a random description

    notes.push({ title, description });
  }

  return { notes };
};

// Generate data with 12 notes

