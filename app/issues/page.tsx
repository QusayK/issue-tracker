import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery, columnsNames } from "./IssueTable";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy, page, pageSize } = useFilters(searchParams);
  const where = { status };

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: page,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />

      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        currentPage={page}
        pageSize={pageSize}
        itemCount={issueCount}
      />
    </Flex>
  );
};

const useFilters = (searchParams: IssueQuery) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columnsNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = +searchParams.page || 1;
  const pageSize = 10;

  return { status, orderBy, page, pageSize };
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Issue Tracker | Issues",
  description: "View a all project issues",
};

export default IssuesPage;
