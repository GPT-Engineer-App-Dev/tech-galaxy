import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "$299", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.600" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            Cart
          </Button>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
            Login
          </Button>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl" textAlign="center">
            Welcome to ElectroShop
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your one-stop shop for the latest electronics
          </Text>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            {products.map((product) => (
              <GridItem key={product.id} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading as="h3" size="md">{product.name}</Heading>
                  <Text mt={2}>{product.price}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Box>

      <Box as="footer" bg="blue.600" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;