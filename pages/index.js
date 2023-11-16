import Charts from '@/components/Charts';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Title title="Dashboard" />
      <div className="flex justify-between mt-20">
        <h2>Hello! {session?.user.name}</h2>
      </div>
      <Charts />
    </Layout>
  );
}
