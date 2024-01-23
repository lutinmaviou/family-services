'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

export async function create(formData: FormData) {
  //const input = formData.get('input') as string;
  const lnameInput = formData.get('lname') as string;
  const fnameInput = formData.get('fname') as string;
  const addressInput = formData.get('address') as string;
  const zipInput = formData.get('zip') as string;
  const cityInput = formData.get('city') as string;
  const phoneInput = formData.get('phone') as string;

 /*  if (!input.trim()) {
    return;
  } */

  await prisma.guest.create({
    data: {
      lastName: lnameInput,
      firstName: fnameInput,
      address: addressInput,
      zip: zipInput,
      city: cityInput,
      phone: phoneInput,
    },
  });

  revalidatePath('/');
}

/* export async function edit(formData: FormData) {
  const input = formData.get('newTitle') as string;
  const inputId = formData.get('inputId') as string;

  await prisma.guest.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath('/');
} */
