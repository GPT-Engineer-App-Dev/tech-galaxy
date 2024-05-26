import { useState } from "react";
import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button, Input, InputGroup, InputLeftElement, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const [searchQuery, setSearchQuery] = useState("");

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Smartwatch", price: "$299", image: "https://via.placeholder.com/150" },
];

const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
};

const Index = () => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.600" color="white" p={4} align="center" wrap="wrap">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <InputGroup maxW="300px" ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchChange}
              bg="white"
              color="black"
            />
          </InputGroup>
          <HStack spacing={4} ml={4}>
            <IconButton icon={<FaShoppingCart />} colorScheme="teal" variant="solid" />
            <IconButton icon={<FaUser />} colorScheme="teal" variant="solid" />
          </HStack>
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
            {filteredProducts.map((product) => (
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