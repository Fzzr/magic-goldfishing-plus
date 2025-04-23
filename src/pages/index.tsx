import Card from '@/components/Card';

import { serraAngel } from '@/constants/cards';

export default function Home() {
  return (
    <div>
      <main>
        <Card
          card={serraAngel}
        />
      </main>
    </div>
  );
}
