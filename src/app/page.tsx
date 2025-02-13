import { Conversation } from './components/conversation';
import './globals.css';
import { Inter } from 'next/font/google';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg container pt-10">
        <h3 className="text-2xl font-bold mb-10 text-center">
          Personal Math tutor
        </h3>
        <Conversation />
      </div>
    </main>
  );
}
