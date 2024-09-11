import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'

export const Contacts = () => {

  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`copiado para a área de transferência!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Oculta o toast após 3 segundos
    }).catch((err) => {
      console.error('Erro ao copiar:', err);
    });
  };

  return (
    <div className=" bg-bodyColor px-6 pb-5 pt-10 sm:pt-32 lg:px-8"
    id="Contatos">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contate me</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              Primeiro nome
            </label>
            <div className="mt-1">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-gray-400 shadow-sm focus:ring-2 focus:ring-violet-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Último nome
            </label>
            <div className="mt-1">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-gray-400 shadow-sm focus:ring-2 focus:ring-violet-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-gray-400 shadow-sm focus:ring-2 focus:ring-violet-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Número celular
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  País
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-gray-400 bg-none py-0 pl-4 pr-9 text-gray-900 focus:ring-2 focus:ring-violet-900 sm:text-sm"
                >
                  <option>BR</option>
                  <option>US</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-900"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                pattern="[0-9]{11}"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black bg-gray-400 focus:ring-2 focus:ring-violet-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Menssagem
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black bg-gray-400 shadow-sm focus:ring-2 focus:ring-violet-900  sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-purpleColor px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
      <footer className='my-20 mx-auto max-w-2xl text-white font-bold' >
        <div className="flex md:flex-row flex-col justify-between items-center">
            <div className='text-center md:text-start'>
                <h2 className='text-blue-300 font-bold'>Email: <span onClick={() => copyToClipboard('vitorvictorblasq@gmail.com')} className=' text-white hover:underline hover:cursor-pointer hover:text-gray-400'>vitorvictorblasq@gmail.com</span></h2>
                <h2 className='text-blue-300 font-bold'>Celular: <span onClick={() => copyToClipboard('+55 (44) 98404-2566')} className=' text-white hover:underline hover:cursor-pointer  hover:text-gray-400'>+55 (44) 98404-2566</span></h2>
                {showToast && (
                    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 text-sm bg-purpleColor text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
                    {toastMessage}
                    </div>
                )}
            </div>
            <div className='text-center md:text-end'>
                <h2 className='text-blue-300 font-bold'>Github: <a href='https://github.com/VitoorVictor' className=' text-white hover:underline hover:text-gray-400'>https://github.com/VitoorVictor</a></h2>
                <h2 className='text-blue-300 font-bold'>Linkedin: <a href='https://www.linkedin.com/in/vitor-victor/' className=' text-white hover:underline hover:text-gray-400'>https://www.linkedin.com/in/vitor-victor</a></h2>
            </div>
        </div>
      </footer>
    </div>
  )
}
