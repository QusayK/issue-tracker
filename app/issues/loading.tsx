"use client";

import { Skeleton } from "@/app/components";
import { Box, Table } from "@radix-ui/themes";
import LoadOnExactRoute from "../components/LoadOnExactRoute";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues = new Array(5).fill(Math.floor(Math.random() * 10));

  return (
    <LoadOnExactRoute route="/issues">
      <Box>
        <IssueActions />
        <Table.Root variant="surface">
          <Table.Header>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Header>

          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                  <Box className="md:hidden">
                    <Skeleton />
                  </Box>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </LoadOnExactRoute>
  );
};

export default LoadingIssuesPage;
