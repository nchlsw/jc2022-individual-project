import { useState } from "react";
import {
  Box,
  Image,
  Avatar,
  Text,
  Icon,
  Button,
  Input,
  Stack,
  Center,
  useColorModeValue,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";

const IMAGE = "https://bit.ly/dan-abramov";

const ContentCard = () => {
  const [displayCommentInput, setDisplayCommentInput] = useState(false);

  return (
    <Box borderWidth="1px" borderRadius="lg" maxW="lg" paddingY="2" marginY="4">
      <Box>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={IMAGE}
              />
            </Box>
            <Stack pt={10} align={"left"}>
              {/* Card Header */}
              <Flex paddingBottom="2" justify="space-between">
                <Box display="flex">
                  <Avatar src="https://bit.ly/dan-abramov" size="md" />
                  <Box marginLeft="2">
                    <Text fontSize="md" fontWeight="bold">
                      Username
                    </Text>
                    <Text fontSize="sm" color="GrayText">
                      Location
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="med" display="inline" alignItems="center">
                    20
                  </Text>
                  <Icon
                    marginLeft="1"
                    boxSize={3}
                    display="inline"
                    alignItems="center"
                    as={FaRegHeart}
                  />
                </Box>
              </Flex>
              <Box>
                <Text display="inline">caption</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" decoration="underline" marginBottom="2">
                  Comments
                </Text>
              </Box>
            </Stack>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default ContentCard;
