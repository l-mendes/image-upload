import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">

        <ModalBody px={60}>
          <Image
            w="full"
            h="full"
            src={imgUrl}
            alt="Imagem"
            objectFit="contain"
            maxW='900px'
            maxH='600px'
          />
        </ModalBody>

        <ModalFooter justifyContent='flex-start'>
          <Link href={imgUrl} target="_blank">Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
