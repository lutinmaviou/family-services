import { PrismaClient } from '@prisma/client';
import AddGuest from './components/shared/addGuest';

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.guest.findMany({
    select: {
      id: true,
      lastName: true,
      firstName: true,
      address: true,
      zip: true,
      city: true,
      phone: true,
    },
    orderBy: {
      lastName: 'asc',
    },
  });

  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      {/* <AddGuest /> */}
      <section className="flex fustify-center flex-col items-center">
        <ul>
          {data.map((guest, id) => (
            <li key={id} className='border border-slate-300 my-2 px-2'>
              {' '}
              <span className="font-bold">{guest.lastName}</span> {guest.firstName}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
