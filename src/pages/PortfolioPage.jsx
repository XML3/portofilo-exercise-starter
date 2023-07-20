import { PortfolioItemCard } from "../components/PortfolioItemCard";
import { portfolioItems } from "../utils/data";
import { Center } from "@chakra-ui/react";

export const PortfolioPage = ({ clickFn }) => {
  return (
    <>
      <Center gap={8} h="100vh" bgColor="gray.900">
        {/* Render the list and for each item, render a PortfolioItemCard. */}
        {portfolioItems.map((item) => (
          <PortfolioItemCard clickFn={clickFn} item={item} key={item.id} />
        ))}
      </Center>
    </>
  );
};
