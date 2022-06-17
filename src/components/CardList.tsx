import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const { onOpen, isOpen, onClose } = useDisclosure();

  function handleViewImage(url: string): void {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      {cards.length > 0 && (
        <SimpleGrid templateColumns='repeat(3, 1fr)' gap='40px'>
          {cards.map(card => (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          ))}
        </SimpleGrid>
      )}

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImageUrl} />
    </>
  );
}
