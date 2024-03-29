import React, { useCallback } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import ThemeToggle from '../components/layout/ThemeToggle';
import { FiChevronDown, BsPencilSquare } from 'react-icons/all';
// import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

type Props = {
  nickname: string;
  profileImageUri: string;
  sebureUri: string;
  logoutFetch: () => void;
};

const LoginTop = ({ nickname, profileImageUri, sebureUri, logoutFetch }: Props) => {
  // const router = useRouter();
  const toast = useToast();

  const logout = useCallback(
    async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        await logoutFetch();
        toast({
          title: `로그아웃 성공`,
          status: 'success',
          isClosable: true,
          duration: 2000,
        });
        // router.push('/');
      } catch (error) {
        console.error('로그아웃 error');
      }
    },
    [logoutFetch]
  );

  return (
    <HStack flex={{ base: 1 }} justify={'flex-end'} direction={'row'} spacing={6}>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
      {/*<IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />*/}
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<BsPencilSquare />}
        onClick={(e) => {
          e.stopPropagation();
          // router.push('/write');
        }}
      />
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack>
              {profileImageUri ? (
                <Avatar size={'sm'} src={profileImageUri} />
              ) : (
                <Avatar size={'sm'} name={nickname} />
              )}
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{nickname}</Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                // router.push('/blog' + '/' + sebureUri);
              }}
            >
              Blog
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                // router.push('/setting');
              }}
            >
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={logout}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default LoginTop;
