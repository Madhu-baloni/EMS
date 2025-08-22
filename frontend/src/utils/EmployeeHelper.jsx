export const columns = [
  {
    name: "S No.",
    selector: (row) => row.sno,
    sortable: true,
  },
  {
    name: "Image",
    selector: (row) => (
      <img
        src={
          row.image
            ? `http://localhost:3000/${row.image}`
            : "/default-image.png"
        }
        alt={row.name}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
    ),
    sortable: false,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: false,
  },
];
