import { Container } from '@chakra-ui/react'
import { Heading, Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { Link } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import Head from 'next/head'
import { Box } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { UnorderedList } from '@chakra-ui/layout'
import { ListItem } from '@chakra-ui/layout'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {EmailIcon, PhoneIcon} from '@chakra-ui/icons'
import { VStack } from '@chakra-ui/layout'
import { LinkBox , LinkOverlay } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { useDisclosure, isOpen, onOpen, onClose } from '@chakra-ui/hooks'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { Textarea } from '@chakra-ui/textarea'

function Project({ title, description, link, alternative, ...rest}) {
  return (
    <LinkBox>
      <Box maxWidth='md' borderRadius='lg' borderWidth='1px' overflow='hidden' m='4'>
        <Link href={'https://github.com/taylourdaniels/' + title}>
          <Image src={link} alt={alternative} />
      
          <Box p='4'>
            <Heading as='h6'> {title} </Heading>
            <Text fontWeight='light' overflow='hidden'> {description} </Text>
          </Box>
        </Link>
       </Box>
    </LinkBox>    
  )
}

function BasicModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea></Textarea>
            <Textarea></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Taylour Daniels</title>
      </Head>
    
      {/* Header */}
      <Flex id='home' direction='row' mt='3' pb='3' borderBottom='1px' borderBottomWidth='thin' borderBottomRadius='sm'>
          <Box ml='3'>
            <Link href='#home'>
              <Heading size='md'>taylour.io</Heading>
            </Link>  
          </Box>
        
          <Spacer />
          
          <Box>
            <Link href='#about' m='3'>About</Link>
            <Link href='#projects' m='3'>Projects</Link>
            <Link href='#contact' m='3'>Contact</Link>
            <Link href="blog" m='3' mr='4' color='yellow.100'>Thoughts and Ideas</Link>
          </Box> 
      </Flex>

    <Container id='about' pt='12'>
      {/* Introduction */}
      <HStack mb='2'>  
        <Box>
          <Heading as='h6'>👋 Hi there!</Heading>
        </Box>

        <Box>
          <Heading as='h4' color='skyblue'>Taylour Daniels</Heading>
        </Box>
      </HStack>

      {/* About */}
      <Text fontWeight='thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione, nesciunt minus dolorum voluptatibus illum cum. Atque placeat officiis temporibus sequi. Quod iste nobis voluptatem sapiente eveniet! Distinctio, ab laboriosam.</Text>

      {/* Skills */}
      <HStack alignItems='center' justifyContent='center' fontWeight='bold' color='lightskyblue' fontSize='lg'>  
        <VStack p='6'>
          <UnorderedList>
            <ListItem>HTML5+ / CSS3</ListItem>
            <ListItem>SASS</ListItem>
          </UnorderedList>
        </VStack> 

        <VStack p='6'>
          <UnorderedList>
            <ListItem>Bootstrap 4</ListItem>
            <ListItem>Next JS</ListItem>
            <ListItem>Chakra UI</ListItem>
          </UnorderedList>
        </VStack>  

        <VStack p='6'>
          <UnorderedList>
            <ListItem>Git</ListItem>
            <ListItem>Chrome Dev Tools</ListItem>
            <ListItem>Javascript ES6+</ListItem>
          </UnorderedList>
        </VStack> 
      </HStack>  
    </Container>

    <Box id='projects'>
      {/* Projects */}
      <HStack align='center' justify='space-evenly'>
        <Project title='LePain' description='All about bread. What could be better?' link='./LePain.png' alternative='The Bread' />
        <Project title='AdventureGame' description='A little text adventure game through the browser.' link='./TextAdventure.png' alternative='Text Adventure' />
        <Project title='FullWebpage' description='The full webpage.' link='./FullWebpage.png' alternative='Full Webpage' />
      </HStack>  
    </Box>

    <Box id='contact' m='3' p='5' borderTop='1px' borderTopWidth='thin' borderTopRadius='sm'>
      {/* Contact and Social Media */}
      <Flex flexDirection='row'>
          <Text>Created with Next.JS and Chakra UI</Text>
          <Spacer />
          <Link href='https://github.com/taylourdaniels' m='2'><FaGithub /></Link>
          
      </Flex>  
    </Box>  
  </Box>
  )
}
