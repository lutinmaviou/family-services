import { create } from '@/app/actions/guestActions';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';

const AddTodo = () => {
  return (
    <Form action={create} className="w-screen px-5">
      <div className="flex flex-col">
        <label htmlFor="lname"></label>
        <Input name="lname" type="text" placeholder="Nom ou Raison Sociale..." required />
        <label htmlFor="fname"></label>
        <Input name="fname" type="text" placeholder="Prénom..." />
        <label htmlFor="address"></label>
        <Input name="address" type="text" placeholder="Adresse..." required />
        <label htmlFor="zip"></label>
        <Input name="zip" type="text" placeholder="Code postal..." required />
        <label htmlFor="city"></label>
        <Input name="city" type="text" placeholder="Ville..." required />
        <label htmlFor="phone"></label>
        <Input name="phone" type="number" placeholder="Téléphone..." />
      </div>
      <label htmlFor="submit"></label>
      <Button type="submit" text="Ajouter" />
    </Form>
  );
};

export default AddTodo;
