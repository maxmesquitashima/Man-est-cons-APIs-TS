import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text
        fontSize="3xl"
        fontWeight="bold"
      >
        Informações da conta
      </Text>
      <Link to="/conta/1">
        <Text fontSize="xl">Conta</Text>
      </Link>
      {/* <a href="/conta/1">Link com tag a</a> podemos usar a tag a ao invés do Link*/}
    </>
  );
};

export default ContaInfo;
