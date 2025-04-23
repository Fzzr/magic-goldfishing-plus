import CardRow from '@/components/CardRow';

import { serraAngel } from '@/constants/cards';

export default function Home() {
  return (
    <div>
      <main>
        <CardRow
          cards={[serraAngel]}
        />
      </main>
    </div>
  );
}
