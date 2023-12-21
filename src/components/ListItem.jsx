import Link from "next/link";

const ListItem = (props) => {
  const { datum, pathName } = props;

  return (
    <>
      <ol>
        {datum.map((data) => (
          <li key={data.id}>
            <Link href={`${pathName}/${data.id}`}>{data.name}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListItem;
