import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const cards: { label: string; value: number; status: Status }[] = [
    { label: "Open issues", value: open, status: "OPEN" },
    { label: "In-progress issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed issues", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {cards.map((card) => (
        <Card key={card.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues?status=${card.status}`}
            >
              {card.label}
            </Link>
            <Text className="font-bold" size="5">
              {card.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
