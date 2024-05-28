import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack justifyContent="space-between">
            <Heading as="h1" size="lg">
              My Blog
            </Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
                Home
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>
                About
              </Link>
              <Link as={RouterLink} to="/blog" _hover={{ textDecoration: "none", color: "gray.400" }}>
                Blog
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
                Contact
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Main Section */}
          <Box flex="3">
            <VStack spacing={8}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="/images/placeholder.jpg" alt="Blog Post" />
                <Box p={6}>
                  <Heading as="h2" size="md" mb={2}>
                    Blog Post Title
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
                  </Text>
                </Box>
              </Box>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src="/images/placeholder.jpg" alt="Blog Post" />
                <Box p={6}>
                  <Heading as="h2" size="md" mb={2}>
                    Another Blog Post
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
                  </Text>
                </Box>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <VStack spacing={4} align="stretch">
              <Heading as="h3" size="md" mb={4}>
                Recent Posts
              </Heading>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Text>Post 1</Text>
              </Box>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Text>Post 2</Text>
              </Box>
              <Box borderWidth="1px" borderRadius="lg" p={4}>
                <Text>Post 3</Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;