import { useFormattedMessage } from "components/Translation";
import { TableHead, Th } from "components/Table";

const TableHeader = () => {
  const { formatMessage } = useFormattedMessage();

  return (
    <TableHead>
      <Th>
        {formatMessage({
          id: "user-table-head-username",
          defaultMessage: "Username",
        })}
      </Th>
      <Th>
        {formatMessage({
          id: "user-table-head-name",
          defaultMessage: "Name",
        })}
      </Th>
      <Th>
        {formatMessage({
          id: "user-table-head-email",
          defaultMessage: "Email",
        })}
      </Th>
      <Th>
        {formatMessage({
          id: "user-table-head-address",
          defaultMessage: "Address",
        })}
      </Th>
      <Th>
        {formatMessage({
          id: "user-table-head-phone",
          defaultMessage: "Phone",
        })}
      </Th>
    </TableHead>
  );
};

export { TableHeader };
