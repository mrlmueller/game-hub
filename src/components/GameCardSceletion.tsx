import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSceletion = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSceletion;
