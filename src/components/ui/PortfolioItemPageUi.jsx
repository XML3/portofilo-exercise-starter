import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={2}
      size="sm"
      variant="solid"
      bgColor="pink.500"
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};
