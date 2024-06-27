import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';

function ContactsPage() {
  return (
    <div className="mt-12 max-w-6xl mx-auto flex flex-grow justify-evenly">
      <div className="p-4">
        <h1 className={`text-5xl pb-2`}>Контакты</h1>
        <h3 className="text-xl font-bold mb-2">Телефон:</h3>
        <p>+7(999) 895-01-11</p>
        <h3 className="text-xl font-bold mb-2">Email:</h3>
        <p>club_diada2024@mail.ru</p>
      </div>
      {/* <div>
        <Image width={400} height={400} src={'/tea.jpeg'} alt="honey-img" />
      </div> */}
      <div>
        <form className="flex flex-col p-4">
          <h3 className="text-5xl mb-2">Связаться</h3>
          <label htmlFor="user-name">
            Name
            <input
              className="w-full border-b-2 border-indigo-500/100 block mb-2 outline-none"
              type="text"
              name="user-name"
              id="user-name"
            />
          </label>
          <label htmlFor="user-email">
            Email
            <input
              className="w-full border-b-2 border-indigo-500/100 block mb-6 outline-none"
              type="email"
              name="user-email"
              id="user-email"
            />
          </label>
          <label htmlFor="submit">
            <Button>Оправить</Button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactsPage;
