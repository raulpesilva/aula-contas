const createBill = (index, date) => {
  const even = index % 2;
  return {
    id: `bill-${Math.floor(Math.random() * 99999)}`,
    date,
    title: 'tipo 1',
    category: 'category',
    value: Math.floor(Math.random() * 1000) * (even ? 1 : -1),
    status: even ? 'recebido' : 'não pago',
  };
};

const createBills = () => {
  const date = new Date(2021, 3, Math.floor(Math.random() * 3) + 10);
  return {
    id: `section-${Math.floor(Math.random() * 99999)}`,
    date,
    bills: [...new Array(10)].map((i, index) => createBill(index, date)),
  };
};

export const BILLS_LIST = [...new Array(10)].map(() => createBills());

// const exampleList = [
//   {
//     id: `section-${Math.floor(Math.random() * 99999)}`,
//     date: new Date(),
//     bills: [
//       {
//         id: `bill-${Math.floor(Math.random() * 99999)}`,
//         date: new Date(),
//         title: 'tipo 1',
//         category: 'category',
//         value: Math.floor(Math.random() * 1000),
//         status: 'recebido',
//       },
//       {
//         id: `bill-${Math.floor(Math.random() * 99999)}`,
//         date: new Date(),
//         title: 'tipo 1',
//         category: 'category',
//         value: Math.floor(Math.random() * 1000),
//         status: 'recebido',
//       },
//     ],
//   },
//   {
//     id: `section-${Math.floor(Math.random() * 99999)}`,
//     date: new Date(),
//     bills: [
//       {
//         id: `bill-${Math.floor(Math.random() * 99999)}`,
//         date: new Date(),
//         title: 'tipo 1',
//         category: 'category',
//         value: Math.floor(Math.random() * 1000),
//         status: 'recebido',
//       },
//     ],
//   },
// ];
