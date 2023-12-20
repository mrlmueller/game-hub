import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSceletion = () => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSceletion;
