import React from 'react';
import { WidgetVideo } from '../components/WidgetVideo'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <WidgetVideo
        title="Meet Dr. Bellamy"
        className=""
      />
    </main>
  );
}