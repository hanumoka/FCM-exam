import React, {useState} from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LoginModal from '../modals/LoginModal';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import NoneLoginTop from './NoneLoginTop';
import LoginTop from './LoginTop';

export default function TopNav() {
  // const { username, nickname, sebureUri, profileImageUri, logoutFetch } = loginStore(
  //   (state) => state
  // );

  const [username, setUsername] = useState();

  // 최소창 메뉴 토글
  const { isOpen, onToggle } = useDisclosure();

  const { isOpen: signupIsOpen, onOpen: signupOnOpen, onClose: signupOnClose } = useDisclosure();
  const { isOpen: loginIsOpen, onOpen: loginOnOpen, onClose: loginOnClose } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Heading as="h1" size="md">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              <Link href="/">Firebase Cloud message 테스트 </Link>
            </Text>
          </Heading>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!username ? (
          <NoneLoginTop loginOnOpen={loginOnOpen} signupOnOpen={signupOnOpen} />
        ) : (
            <div>
              로그인 탑이 나올자리
            </div>
          // <LoginTop
          //   nickname={nickname}
          //   profileImageUri={profileImageUri}
          //   sebureUri={sebureUri}
          //   logoutFetch={logoutFetch}
          // />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <LoginModal isOpen={loginIsOpen} onClose={loginOnClose} />
    </Box>
  );
}
