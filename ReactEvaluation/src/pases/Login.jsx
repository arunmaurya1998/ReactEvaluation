import { Input, Center, Button } from "@chakra-ui/react";
export default function Login() {
  return (
    <>
      <Center>
        <h2>Login First</h2>
        <Input type="email" placeholder="Enter Your Email" size="md" />
        <Input type="password" placeholder="Enter Your Password" size="md" />
        <Input type="submit"  size="md" />
      </Center>
    </>
  );
}
