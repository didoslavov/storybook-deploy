import React from 'react';
import Head from 'next/head';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import UserList from '@/components/UserList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Storybook Demo</title>
        <meta name="description" content="Storybook deployment demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <Header variant="primary" title="Storybook Deployment Demo" />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
              <h2 className="text-xl font-semibold">Button Components</h2>
              <div className="space-y-2">
                <Button variant="primary" size="md">
                  Primary Button
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Button
                </Button>
                <Button variant="outline" size="md">
                  Outline Button
                </Button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
              <h2 className="text-xl font-semibold">Input Components</h2>
              <div className="space-y-2">
                <Input label="Default Input" placeholder="Type something..." />
                <Input
                  label="Disabled Input"
                  placeholder="Cannot type here"
                  disabled
                />
                <Input
                  label="With Error"
                  placeholder="Error state"
                  error="This field has an error"
                />
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Header variant="secondary" title="API Mocking Example" />
            <p className="mt-2 mb-4 text-gray-600">
              This UserList component fetches data from a mock API endpoint
              using MSW.
            </p>
            <UserList />
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <Header variant="secondary" title="Component Variations" />
            <p className="mt-2 text-gray-600">
              This demo showcases different component variations that are
              documented in Storybook. Check out the Storybook documentation to
              see all available options and interactions.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
