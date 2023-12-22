import Link from "next/link";

const ListItem = (props) => {
  const { datum, pathName } = props;

  return (
    <>
      <div className="p-24 mx-auto max-w-[600px]">
        <ul>
          {datum.map((data) => (
            <li key={data.id}>
              <Link
                href={`${pathName}/${data.id}`}
                className="hover:text-blue-300"
              >
                <h1 className="font-bold">{data.name}</h1>
                <div className="text-sm">{data.email}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListItem;
